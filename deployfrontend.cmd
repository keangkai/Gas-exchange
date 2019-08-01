robocopy src docs /e
robocopy build\contracts docs
git add .
git commit -m "Add frontend files"
git push
