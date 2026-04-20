from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from .. import schemas, crud, models
from ..database import get_db
from datetime import datetime, timedelta
from jose import jwt
import os
from dotenv import load_dotenv

load_dotenv()
JWT_SECRET = os.getenv('JWT_SECRET', 'secret-example')
JWT_ALGORITHM = os.getenv('JWT_ALGORITHM', 'HS256')
ACCESS_TOKEN_EXPIRE_MINUTES = 60*24

router = APIRouter(prefix="/api")

@router.post('/auth/register', response_model=schemas.UserOut)
def register(user: schemas.UserCreate, db: Session = Depends(get_db)):
    # simple username uniqueness check
    if user.username:
        existing = crud.get_user_by_username(db, user.username)
        if existing:
            raise HTTPException(status_code=400, detail='username already exists')
    db_user = crud.create_user(db, user, password=user.password)
    return db_user

@router.post('/auth/login', response_model=schemas.Token)
def login(payload: dict, db: Session = Depends(get_db)):
    # payload should contain username and password
    username = payload.get('username')
    password = payload.get('password')
    if not username or not password:
        raise HTTPException(status_code=400, detail='username and password required')
    user = crud.get_user_by_username(db, username)
    if not user or not user.password_hash or not crud.verify_password(password, user.password_hash):
        raise HTTPException(status_code=401, detail='invalid credentials')
    data = {"sub": str(user.id), "role": user.role}
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    token = jwt.encode(to_encode, JWT_SECRET, algorithm=JWT_ALGORITHM)
    return {"access_token": token, "token_type": "bearer"}

# create reports
@router.post('/reports', status_code=201)
def create_report(report: schemas.ReportCreate, db: Session = Depends(get_db)):
    # in a real app we'd get current user from token; demo: optional user_id from payload
    user_id = None
    # create with null user_id if anonymous
    r = crud.create_report(db, user_id, report)
    return {"id": r.id, "status": r.status}

# notices
@router.get('/notices')
def list_notices(db: Session = Depends(get_db)):
    notices = db.query(models.Notice).order_by(models.Notice.created_at.desc()).all()
    return notices

@router.post('/notices', status_code=201)
def post_notice(notice: schemas.NoticeCreate, db: Session = Depends(get_db)):
    # demo: chancellor_id must be provided in request header or body; here we'll accept header X-Chancellor-Id
    # this is intentionally minimal; we'll accept chancellor id via env or similar for demo
    chancellor_id = None
    n = crud.create_notice(db, chancellor_id, notice)
    return {"id": n.id}

# events
@router.get('/events')
def list_events(db: Session = Depends(get_db)):
    return db.query(models.Event).order_by(models.Event.start_time.asc()).all()

@router.post('/events', status_code=201)
def create_event(ev: schemas.EventCreate, db: Session = Depends(get_db)):
    chancellor_id = None
    e = crud.create_event(db, chancellor_id, ev)
    return {"id": e.id}
