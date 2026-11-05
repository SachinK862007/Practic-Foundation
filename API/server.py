import os
from pathlib import Path
from typing import Any

import httpx
from fastapi import FastAPI, HTTPException, Query
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

ROOT = Path(__file__).parent

def load_dotenv() -> None:
    env_file = ROOT / ".env"
    if not env_file.exists():
        return
    for line in env_file.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            key, value = line.split("=", 1)
            os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))

load_dotenv()
app = FastAPI(title="API Hub")
app.mount("/js", StaticFiles(directory=ROOT / "js"), name="js")

def token() -> str:
    value = os.getenv("TMDB_READ_ACCESS_TOKEN", "").strip()
    if not value:
        raise HTTPException(503, "TMDB is not configured. Add TMDB_READ_ACCESS_TOKEN to .env.")
    if not value.startswith("eyJ"):
        raise HTTPException(503, "TMDB_READ_ACCESS_TOKEN must be the long API Read Access Token, not the shorter API key.")
    return value

async def tmdb_get(path: str, params: dict[str, Any] | None = None) -> Any:
    load_dotenv()
    headers = {"Authorization": "Bearer " + token(), "accept": "application/json"}
    try:
        async with httpx.AsyncClient(base_url="https://api.themoviedb.org/3", timeout=10) as client:
            response = await client.get(path, params=params, headers=headers)
    except httpx.RequestError as error:
        raise HTTPException(503, "TMDB could not be reached. Check your internet connection.") from error
    if response.status_code in (401, 403):
        raise HTTPException(503, "TMDB rejected the token. Use a TMDB API Read Access Token in .env, not an API key.")
    if response.status_code >= 400:
        raise HTTPException(503, "TMDB returned an error while loading movies.")
    return response.json()

@app.get("/api/tmdb/search/movie")
async def movie_search(query: str = Query(min_length=1, max_length=100), page: int = Query(1, ge=1, le=500)):
    return await tmdb_get("/search/movie", {"query": query, "include_adult": "false", "language": "en-US", "page": page})

@app.get("/api/tmdb/movie/popular")
async def popular_movies(page: int = Query(1, ge=1, le=500)):
    return await tmdb_get("/movie/popular", {"language": "en-US", "page": page})

@app.get("/api/tmdb/movie/{movie_id}")
async def movie_details(movie_id: int):
    return await tmdb_get("/movie/" + str(movie_id), {"language": "en-US"})

@app.get("/")
async def index():
    return FileResponse(ROOT / "index.html")

@app.get("/style.css")
async def stylesheet():
    return FileResponse(ROOT / "style.css", media_type="text/css")

@app.get("/main.js")
async def script():
    return FileResponse(ROOT / "main.js", media_type="text/javascript")
