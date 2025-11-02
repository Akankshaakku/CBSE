# CPPS School Website - Local Server Starter (PowerShell)
# This script starts the development server

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   CPPS School Website - Local Server" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    Write-Host "This may take a few minutes..." -ForegroundColor Yellow
    Write-Host ""
    npm install
    Write-Host ""
}

# Start the development server
Write-Host "Starting development server..." -ForegroundColor Green
Write-Host ""
Write-Host "Your website will open at: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

npm start

Read-Host "Press Enter to exit"

