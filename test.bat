echo "123456789"
call npm run build
cd dist
::for /r %%i in (*) do (
::  echo %%i
::  git add %%i -f
::)
git checkout gh-pages
git status
pause