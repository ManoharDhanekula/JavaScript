## GIT

- git fetch --all
- git branch -D branch_name
- git --graph

- How to delete the Commit ?

```
git reset --soft HEAD~ || git reset --soft HEAD^ - For Deleting the last commit in the vscode
but not in the github repositories.
for last commits to delete use the command git reset --soft HEAD~2
```

````
- git reset --hard HEAD~```
````

git rebase --i HEAD ~ 3```
Rebasing is useful for making sure that the branch you are working on diverges from the latest version of the parent branch.

**https://www.atlassian.com/git/glossary#terminology**

**GitHub Fork**

- With Command Lines "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo?tool=cli"

- Fork the repository.
- Make the fix.
- Submit a pull request to the project owner.

**Git Merge vs Rebase**

Merge - The git merge command lets you take the independent lines of development created by git branch and integrate them into a single branch.

```
t0 -> t2 -> t4 -> t6
   t1 -> t3 -> t5

```

IN the above t1,t3,t5 while merge with the t6
Rebase

```

t0 -> t2 -> t4 -> t1-> t3-> t5

```

- Its commits in linner and cleaner manner.
