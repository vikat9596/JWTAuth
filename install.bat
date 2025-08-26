@echo off
echo 🚀 Setting up JWT Authentication System...

REM Install root dependencies
echo 📦 Installing root dependencies...
call npm install

REM Install backend dependencies
echo 🔧 Installing backend dependencies...
cd backend
call npm install
cd ..

REM Install frontend dependencies
echo 🎨 Installing frontend dependencies...
cd frontend
call npm install
cd ..

echo ✅ Installation complete!
echo.
echo 📋 Next steps:
echo 1. Create a .env file in the backend directory with your configuration
echo 2. Start the backend: cd backend ^&^& npm run dev
echo 3. Start the frontend: cd frontend ^&^& npm start
echo.
echo 🌐 Backend will run on: http://localhost:5000
echo 🌐 Frontend will run on: http://localhost:3000
pause
