echo "123456789"
call npm run build
cd dist
call git checkout gh-pages
call git add favicon.ico -f
::for /r %%i in (*) do (
::  echo %%i
::  git add %%i -f
::)
call git commit -m "bat"
call git push
git status
pause