commitMessage='Auto Commit'

if [ $# == 1 ] ; then
	commitMessage=$1
fi

echo $commitMessage

git add .
git commit -m "$commitMessage"
# git push
