from fastapi import FastAPI, Query, BackgroundTasks
import yt_dlp
import uuid
import os
from fastapi.responses import FileResponse

app = FastAPI()

def remove_file(filename: str):
    if os.path.exists(filename):
        os.remove(filename)

@app.get("/download")
def download_video(url: str, background_tasks: BackgroundTasks):
    video_id = str(uuid.uuid4())
    filename = f"{video_id}.mp4"

    ydl_opts = {
        'outtmpl': filename,
        'format': 'bestvideo+bestaudio',
        'noplaylist': True,
        'keep_video': True,
    }


    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])

        final_filename = f"{video_id}.mp4.webm"

        background_tasks.add_task(remove_file, final_filename)

        return FileResponse(path=final_filename, filename="video.mp4", media_type='video/mp4')
    
    except Exception as e:
        return {"erro": str(e)}

