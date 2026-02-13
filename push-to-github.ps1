# Run this script AFTER installing Git from https://git-scm.com/download/win
# Right-click in Cursor terminal and "Run in Integrated Terminal" or run: .\push-to-github.ps1

Set-Location $PSScriptRoot

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/conflcts/ctrlstudio-site.git
git push -u origin main

Write-Host "`nDone! Your site is now on GitHub." -ForegroundColor Green
