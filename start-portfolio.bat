@echo off
title Rupanjan Portfolio — Dev Server
cd /d "%~dp0"

echo.
echo  ========================================
echo   Rupanjan Portfolio
echo   Starting dev server...
echo  ========================================
echo.

:: Stop anything already on port 3000
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000 ^| findstr LISTENING') do (
  taskkill /F /PID %%a >nul 2>&1
)

:: Open browser after a short delay (while server boots)
start "" cmd /c "ping 127.0.0.1 -n 8 >nul && start http://localhost:3000"

:: Clean cache + start (avoids common localhost errors)
call npm run dev:clean

if errorlevel 1 (
  echo.
  echo  Server stopped or failed. Press any key to close.
  pause >nul
)