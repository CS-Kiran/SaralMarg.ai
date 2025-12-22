from fastapi import FastAPI
from dotenv import load_dotenv
from fastapi.responses import JSONResponse
import os

load_dotenv()

print("Environment variables loaded:")
print(f"POSTGRES_URL: {os.getenv('POSTGRES_URL')}")
print(f"MONGO_URI: {os.getenv('MONGO_URI')}")

from app.db.postgres import health_check_postgres
from app.db.mongodb import health_check_mongodb

app = FastAPI(title="FastAPI + Postgres + Mongo")


@app.get("/health")
async def health_check():
    """Combined health check endpoint"""
    postgres_status = health_check_postgres()
    mongodb_status = await health_check_mongodb()
    
    if postgres_status["status"] == "healthy" and mongodb_status["status"] == "healthy":
        return JSONResponse(
            status_code=200,
            content={
                "status": "healthy",
                "postgres": postgres_status,
                "mongodb": mongodb_status
            }
        )
    return JSONResponse(
        status_code=503,
        content={
            "status": "unhealthy",
            "postgres": postgres_status,
            "mongodb": mongodb_status
        }
    )