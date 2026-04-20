# mentalAidPal Backend (FastAPI)

This backend is a minimal FastAPI scaffold to support the mentalAidPal frontend. It uses SQLAlchemy and expects a MySQL database. The SQL to create the database and tables is provided in `sql/create_db.sql` so you can paste it into phpMyAdmin.

Quick start (Windows PowerShell):

1. Create a Python virtual environment and install dependencies

```powershell
cd 'C:\Users\Reginald\Documents\mentalaidpal_last\backend'
python -m venv .venv; .\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

2. Copy `sql/create_db.sql` into phpMyAdmin or run it in your MySQL client. Update the database name/user as needed.

3. Configure environment variables. Create a `.env` file in `backend/` with these values (example):

```
DATABASE_URL=mysql+pymysql://root:yourpassword@127.0.0.1:3306/mentalaidpal
JWT_SECRET=replace-with-a-secret
JWT_ALGORITHM=HS256
```

4. Start the API (development):

```powershell
uvicorn app.main:app --reload --port 8000
```

API endpoints (examples)
- POST /api/auth/register
- POST /api/auth/login
- POST /api/reports/legal
- POST /api/reports/victim
- GET /api/notices
- POST /api/notices (chancellor)

This is a minimal scaffold. After you configure MySQL and confirm connectivity, we can add migrations, tests and more robust authorization/role checks.
