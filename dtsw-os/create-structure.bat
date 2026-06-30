@echo off
cd /d "d:\DTSW OS\dtsw-os"

REM Create main directories
mkdir "app\(public)" 2>nul
mkdir "app\(auth)\login" 2>nul
mkdir "app\(auth)\signup" 2>nul
mkdir "app\dashboard" 2>nul
mkdir "app\dashboard\clubs" 2>nul
mkdir "app\dashboard\events" 2>nul
mkdir "app\dashboard\tasks" 2>nul
mkdir "app\dashboard\team" 2>nul
mkdir "app\dashboard\mentor" 2>nul
mkdir "app\dashboard\profile" 2>nul
mkdir "app\clubs" 2>nul
mkdir "app\events" 2>nul
mkdir "app\research" 2>nul
mkdir "app\industry-lab" 2>nul
mkdir "app\api" 2>nul

echo All directories created successfully!
