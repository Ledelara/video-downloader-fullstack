import os
from dotenv import load_dotenv

load_dotenv()

host = os.getenv("HOST")
port = int(os.getenv("PORT", 8080))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host=host, port=port, reload=True)
