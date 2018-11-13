commitMessage = "Auto Commit"
if [[ $1 ]]; then
	commitMessage = $1
fi

git add .
git commit -m commitMessage
git push
