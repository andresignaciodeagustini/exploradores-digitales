from fastapi import APIRouter

from backend.schemas.chat_schema import ChatRequest, ChatResponse
from backend.services.chatbot_service import process_message

router = APIRouter()


@router.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    reply = process_message(request.message)

    return ChatResponse(
        reply=reply
    )