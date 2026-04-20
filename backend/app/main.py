from fastapi import FastAPI
from .database import engine, Base
from .api import routes

# create tables (for initial development). When using migrations, remove this and use Alembic.
Base.metadata.create_all(bind=engine)

app = FastAPI(title='mentalAidPal API')
app.include_router(routes.router)

@app.get('/')
def root():
    return {'status':'ok','service':'mentalAidPal backend'}
