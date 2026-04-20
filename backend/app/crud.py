from sqlalchemy.orm import Session
from . import models, schemas
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# user helpers
def get_user_by_username(db: Session, username: str):
    return db.query(models.User).filter(models.User.username == username).first()

def create_user(db: Session, user: schemas.UserCreate, password: str = None):
    hashed = None
    if password:
        hashed = pwd_context.hash(password)
    db_user = models.User(
        full_name=user.full_name,
        role=user.role,
        username=user.username,
        password_hash=hashed,
        university=user.university,
        biography=user.biography,
        terminal_illness=user.terminal_illness,
        stigma=user.stigma,
        disability=user.disability,
        age=user.age,
        nrc=user.nrc,
        school_id=user.school_id,
        year_of_study=user.year_of_study,
        reg_number=user.reg_number,
        years_experience=user.years_experience,
        home_address=user.home_address,
        recommendation_path=user.recommendation_path,
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def verify_password(plain, hashed):
    return pwd_context.verify(plain, hashed)

# reports
def create_report(db: Session, user_id: int, report: schemas.ReportCreate):
    db_r = models.Report(
        user_id=user_id,
        type=report.type,
        title=report.title,
        details=report.details,
        university=report.university,
        anonymous=report.anonymous,
    )
    db.add(db_r)
    db.commit()
    db.refresh(db_r)
    return db_r

# notices
def create_notice(db: Session, chancellor_id: int, notice: schemas.NoticeCreate):
    db_n = models.Notice(chancellor_id=chancellor_id, title=notice.title, body=notice.body)
    db.add(db_n)
    db.commit()
    db.refresh(db_n)
    return db_n

# events
def create_event(db: Session, chancellor_id: int, ev: schemas.EventCreate):
    db_e = models.Event(chancellor_id=chancellor_id, title=ev.title, description=ev.description, start_time=ev.start_time, end_time=ev.end_time)
    db.add(db_e)
    db.commit()
    db.refresh(db_e)
    return db_e
