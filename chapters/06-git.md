# Git: it's like File > Save, only collaborative

Seriously. You know how important it is to save your work. We've all been beaten into a sad sack of anger and disappointment when we've lost our work.

Consider git to be the equivalent of File > Save that keeps track of every version of your work, and allows you to share those versions with other people and collaborate in a way that won't have you overwriting each other's changes.

Git is version control software.

There are many alternatives to git, but it has become a standard for developers in large part because of github.com, a service for hosting code using git.

The best way to start learning git (and GitHub) is to visit [try.github.com](http://try.github.com). You should also try [githug, a game for learning git](https://github.com/Gazler/githug).

## Project website:
http://git-scm.com/

## Install
download / install: http://git-scm.com/downloads

If you are using a Mac, you can install using [homebrew](http://brew.sh/):

```
brew install git
```

> For more information about homebrew, check out the project's homepage: [brew.sh](http://brew.sh/).

On Debian/Ubuntu, install using apt-get:

```
apt-get install git
```

For Windows machines, download git from the git website: [git-scm.com/downloads](http://git-scm.com/downloads)

## Documentation
docs: http://git-scm.com/documentation

## Basics

Here are some basics of using git:

Create a git repository:

~~~~~~~~
cd name-of-folder
git init
~~~~~~~~

Add files:

~~~~~~~~
git add name-of-file

// or add all files in directory:

git add .
~~~~~~~~

When you add files to a git repository they are "staged" and ready to be committed.

Remove files:

~~~~~~~~
git rm name-of-file

// force removal of files:

git rm -rf name-of-file-or-directory
~~~~~~~~

Commit files and add a message using the `-m` option:

~~~~~~~~
git commit -m 'a message describing the commit'
~~~~~~~~

Create a branch:

~~~~~~~~
git branch name-of-branch
~~~~~~~~

Checkout a branch:

~~~~~~~~
git checkout name-of-branch
~~~~~~~~

Shortcut for creating a new branch and checking it out:

~~~~~~~~
git checkout -b name-of-branch
~~~~~~~~

Merge a branch into the master branch:

~~~~~~~~
git checkout master
git merge name-of-branch
~~~~~~~~

Add a remote repository:

~~~~~~~~
git remote add origin git@github.com:yourname/projectname.git
~~~~~~~~

List associated repositories:

~~~~~~~~
git remote -v
~~~~~~~~

Pull changes from a remote repository:

~~~~~~~~
git pull origin master
~~~~~~~~

Push changes to a remote repository

~~~~~~~~
git push origin master
~~~~~~~~

Checkout a remote branch:

~~~~~~~~
git checkout -t origin/haml
~~~~~~~~

## Resources

**Official documentation**  

The [official git documentation](http://git-scm.com/doc) has an [API reference](http://git-scm.com/docs), a [book about git](http://git-scm.com/book), [videos](http://git-scm.com/videos) instructing on basic usage of git, and a [page of links](http://git-scm.com/doc/ext) to useful resources.

**[try.github.io](http://try.github.io/)**  

This interactive tutorial is a great introduction to both git and GitHub. Highly recommended.

**[gitready.com](http://gitready.com/)**

I often refer to gitready.com for various tips and tricks for using git.

**[help.github.com](https://help.github.com/)**

The help section of GitHub's site has instructions for using github.com, but it also has some great documentation for using git.