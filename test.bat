echo "123456789"
call npm run build
cd dist
git checkout gh-pages
git add favicon.ico -f
::for /r %%i in (*) do (
::  echo %%i
::  git add %%i -f
::)
git commit -m "bat"
git push
git status
pause