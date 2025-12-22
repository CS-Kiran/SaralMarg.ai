from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker, declarative_base
from os import getenv

Base = declarative_base()

def health_check_postgres():
    """Check PostgreSQL database connection status"""
    try:
        db_url = getenv("POSTGRES_URL")
        
        if not db_url:
            return {
                "status": "unhealthy",
                "database": "postgres",
                "message": "POSTGRES_URL environment variable is not set"
            }
        
        engine = create_engine(db_url, future=True)
        with engine.connect() as connection:
            result = connection.execute(text("SELECT 1"))
            result.close()
        
        engine.dispose()
        
        return {
            "status": "healthy",
            "database": "postgres",
            "message": "PostgreSQL connection successful"
        }
    except Exception as e:
        return {
            "status": "unhealthy",
            "database": "postgres",
            "message": f"PostgreSQL connection failed: {str(e)}"
        }