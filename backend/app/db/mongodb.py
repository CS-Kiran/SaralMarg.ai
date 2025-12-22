import motor.motor_asyncio
from os import getenv

MONGO_URL = getenv("MONGO_URL")
MONGO_DB = getenv("MONGO_DB")

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URL)
db = client[MONGO_DB]


async def health_check_mongodb():
    """Check MongoDB database connection status"""
    try:
        await client.admin.command('ping')
        return {
            "status": "healthy",
            "database": "mongodb",
            "message": "MongoDB connection successful"
        }
    except Exception as e:
        return {
            "status": "unhealthy",
            "database": "mongodb",
            "message": f"MongoDB connection failed: {str(e)}"
        }