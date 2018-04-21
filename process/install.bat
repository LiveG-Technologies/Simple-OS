@echo off
echo Installing...
set dir=%cd%
cd %userprofile%\AppData\Local\Programs\Python\Python35-32
python -m pip install flask
echo You're all set! Press any key to launch Simple OS.
pause > nul
start chrome "file:///%dir%/../src/index.html"