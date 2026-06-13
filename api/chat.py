from fastapi import FastAPI

from backend.routes.chat_routes import router

app = FastAPI(
    title="Exploradores Digitales API"
)

app.include_router(router)


@app.get("/")
def root():
    return {
        "message": "Backend Exploradores Digitales funcionando"
    }