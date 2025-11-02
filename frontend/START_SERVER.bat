@echo off
REM CPPS School Website - Local Server Starter
REM This script starts the development server

echo.
echo ========================================
echo   CPPS School Website - Local Server
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    echo This may take a few minutes...
    echo.
    call npm install
    echo.
)

REM Start the development server
echo Starting development server...
echo.
echo Your website will open at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

call npm start

pause

