from fastapi import FastAPI, BackgroundTasks
import yt_dlp
import uuid
import os
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def remove_file(filename: str):
    if os.path.exists(filename):
        os.remove(filename)

@app.get("/download")
def download_video(url: str, background_tasks: BackgroundTasks):
    video_id = str(uuid.uuid4())
    output_filename = f"{video_id}.mp4"

    ydl_opts = {
        'outtmpl': output_filename,
        'format': 'bestvideo+bestaudio',
        'noplaylist': True,
        'keep_video': True,
    }

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])

        final_filename = f"{video_id}.mp4.mkv"

        background_tasks.add_task(remove_file, final_filename)

        return FileResponse(path=final_filename, filename="video.mp4", media_type='video/mp4')
    
    except Exception as e:
        return {"erro": str(e)}
