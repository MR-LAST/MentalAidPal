from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from .database import Base

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(200), nullable=False)
    role = Column(String(32), nullable=False, index=True)  # 'student', 'chancellor', 'admin'
    username = Column(String(120), unique=True, nullable=True)
    password_hash = Column(String(200), nullable=True)
    university = Column(String(200), nullable=True)
    biography = Column(Text, nullable=True)
    terminal_illness = Column(String(200), nullable=True)
    stigma = Column(String(200), nullable=True)
    disability = Column(String(200), nullable=True)
    age = Column(Integer, nullable=True)
    nrc = Column(String(60), nullable=True)
    school_id = Column(String(120), nullable=True)
    year_of_study = Column(String(60), nullable=True)
    reg_number = Column(String(120), nullable=True)  # for chancellors
    years_experience = Column(String(60), nullable=True)
    home_address = Column(String(300), nullable=True)
    recommendation_path = Column(String(500), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    reports = relationship('Report', back_populates='user')
    notices = relationship('Notice', back_populates='chancellor')
    events = relationship('Event', back_populates='chancellor')

class Report(Base):
    __tablename__ = 'reports'
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id', ondelete='CASCADE'), nullable=True)
    type = Column(String(50), nullable=False)  # 'legal','victim','crime'
    title = Column(String(250), nullable=False)
    details = Column(Text, nullable=True)
    university = Column(String(200), nullable=True)
    anonymous = Column(Boolean, default=False)
    status = Column(String(50), default='open')
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    user = relationship('User', back_populates='reports')

class Notice(Base):
    __tablename__ = 'notices'
    id = Column(Integer, primary_key=True, index=True)
    chancellor_id = Column(Integer, ForeignKey('users.id', ondelete='SET NULL'), nullable=True)
    title = Column(String(250), nullable=False)
    body = Column(Text, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    chancellor = relationship('User', back_populates='notices')

class Event(Base):
    __tablename__ = 'events'
    id = Column(Integer, primary_key=True, index=True)
    chancellor_id = Column(Integer, ForeignKey('users.id', ondelete='SET NULL'), nullable=True)
    title = Column(String(250), nullable=False)
    description = Column(Text, nullable=True)
    start_time = Column(DateTime(timezone=True), nullable=True)
    end_time = Column(DateTime(timezone=True), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    chancellor = relationship('User', back_populates='events')

class Community(Base):
    __tablename__ = 'communities'
    id = Column(Integer, primary_key=True, index=True)
    university = Column(String(200), nullable=False)
    name = Column(String(200), nullable=False)
    description = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
