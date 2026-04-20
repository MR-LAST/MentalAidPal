from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class UserBase(BaseModel):
    full_name: str
    role: str = 'student'
    university: Optional[str] = None

class UserCreate(UserBase):
    username: Optional[str] = None
    password: Optional[str] = None
    biography: Optional[str] = None
    terminal_illness: Optional[str] = None
    stigma: Optional[str] = None
    disability: Optional[str] = None
    age: Optional[int] = None
    nrc: Optional[str] = None
    school_id: Optional[str] = None
    year_of_study: Optional[str] = None
    # chancellor fields
    reg_number: Optional[str] = None
    years_experience: Optional[str] = None
    home_address: Optional[str] = None
    recommendation_path: Optional[str] = None

class UserOut(UserBase):
    id: int
    full_name: str
    university: Optional[str]
    created_at: Optional[datetime]
    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str = 'bearer'

class ReportCreate(BaseModel):
    type: str = Field(..., description='legal | victim | crime')
    title: str
    details: Optional[str] = None
    university: Optional[str] = None
    anonymous: bool = False

class NoticeCreate(BaseModel):
    title: str
    body: str

class EventCreate(BaseModel):
    title: str
    description: Optional[str] = None
    start_time: Optional[datetime] = None
    end_time: Optional[datetime] = None
