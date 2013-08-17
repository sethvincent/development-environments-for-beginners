# Development Environments for Beginners

Thanks for checking out the book! Please consider supporting the work by purchasing the book.


# Hello, dear reader.

## Thank you

Thank you for buying this book! It is independently published, and each sale makes a huge difference.

This book is a work in progress, and you'll get all updates for free.

## About the book
If you're not sure how to choose between programming in ruby, python, or javascript, this guide will get you familiar with the tools, syntax, and workflow associated with each language.

By comparing ruby, python, and javascript development environments you'll get a strong sense of which language best fits your style. 

Maybe you'll learn that you want to work in all three, or two out of three. Whatever happens, you'll be able to use this guide as a reference if you need help remembering how to set up a development environment for any one of these three languages.

### Main concepts you'll learn:
- command-line tools
- virtual machines
- text editors
- version control
- package managers
- documentation
- testing
- language basics
- intro to web frameworks



# Terminal: conquer the command line

Get excited, it's time to use the terminal.

The most important thing to keep in mind: don't be afraid of the terminal.

You can only break your computer using the terminal if you do really weird stuff. I mean, you mostly have to go out of your way to break your computer. Most commands are completely harmless. There are a few ways you can crunch your machine, so it's worthwhile to be skeptical about new commands and research what they do before you use them.

## Mac / Linux

For most purposes, daily activity in the terminal will be the same in Mac and various Linux distros.

### Basic commands:

Changing directory:

```
cd path/of/directories
```

`cd` on its own, or `cd ~` will take you to your home directory.

Create a directory:

```
mkdir directory-name
```

Show the directory you're currently in:

```
pwd
```

List the files in the directory:

```
ls
```

List the files in a more readable way, with useful information like permissions included:

```
ls -al
```

Open a file with its default application:

```
open filename
```

Open current directory in the finder:

```
open .
```

or open some other directory:

```
open path/to/directory
```

Create an empty file if it doesn't already exist:

```
touch file-name
```

Open and edit a file with the simple nano editor:

```
nano file-name
```

Move a file or directory:

```
mv file new/path/to/file
```

Rename a file or directory:

```
mv file new-file-name
```

Copy a file:

```
cp file name-of-file-copy
```

Copy a directory

```
cp -R directory directory-copy
```

The `-R` option allows for recursive copying of files inside the directory.


Delete a file:

```
rm file-name
```

Delete a directory and its contents:

```
rm -rf path/to/directory
```

Let's dissect this command:

`rm` is for deleting things.

`-rf` means that files will be recursively deleted, and the deletion will be forced. `r` is for recursive, `f` is for forced.

**Never do this:**

```
rm -rf /
```

Be very careful with the rm command. You can easily delete things on accident.

This command is deleting with the `rm` command, recursively forcing the deletion of files and folders with `-rf`, and we've passed the root directory, `/` as the thing to delete. This means it will delete everything on your hard drive. Some operating systems protect against this mistake, and if you're not the root user you would need to prefix this command with `sudo` to make it work. Be careful, and be nice.

**Clear the terminal screen of previous activity:**

```
clear
```

**Reset the terminal:**

```
reset
```

**Stop a running process:**

```
control+C
```

If a process is running in the terminal and you need to stop it, press the `control` key and the `C` key at the same time.

## Windows

You'll likely want to install a tool called cygwin: [http://www.cygwin.com/](http://www.cygwin.com/)

> This section of the book is still a work in progress.


# Vagrant: install an operating system inside of your operating system!

Vagrant is a tool for running "virtual machines" on a computer. Let's say your computer is a Mac. With vagrant, you can run a virtual machine with a different operating system on your computer. 

It's almost like dual booting, like having both Windows and Linux installed on a computer, except you have a lot more control over a virtual machine. You can spin one up temporarily to work on a project, and when you're done, destroy the virtual machine.

Vagrant makes this process easy. It relies on virtual machine software – there are a number of options, but we'll use software called virtualbox.

In a way, vagrant is a wrapper around virtualbox – making it easy to create, run, and destroy virtual machines that run from the command line.

The primary operating system on your computer is called the "host" operating system. Any virtual machines you create are called "guest" operating systems.

## Reasons for using vagrant:
- You can keep your host

## Website
http://www.vagrantup.com/

## Install

### Virtualbox:

First we install [virtualbox](https://www.virtualbox.org/).

Go to the virtualbox downloads folder: [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads).

If needed, you can follow the **virtualbox installation instructions:** [http://www.virtualbox.org/manual/ch02.html](http://www.virtualbox.org/manual/ch02.html)

#### Documentation

https://www.virtualbox.org/wiki/Documentation

[http://www.virtualbox.org/manual](http://www.virtualbox.org/manual)


### Vagrant

**download vagrant:**

[http://downloads.vagrantup.com](http://downloads.vagrantup.com)

**installation instructions:**

[http://docs-v1.vagrantup.com/v1/docs/getting-started/index.html#install_vagrant](http://docs-v1.vagrantup.com/v1/docs/getting-started/index.html#install_vagrant)

#### Documentation
docs: http://docs-v1.vagrantup.com/v1/docs/index.html

## Set up your first vagrant machine

## Alternatives to vagrant/virtualbox
- docker
- nitrous.io


# Text editors

## Sublime Text Editor

Sublime is a popular text editor with versions for Mac, Windows, and Linux. 

You can download an evaluation copy for free, and pay for a license whenever you're ready.

In this book we'll be using version 2 of Sublime, in future updates to the book we'll switch to version 3.

### Website
http://www.sublimetext.com/

### Documentation
docs: http://www.sublimetext.com/docs/2/index.html

### Install
download / install: http://www.sublimetext.com/2

### Basic usage

### Use Sublime from the command line

### Resources

## Alternative text editors:
There are too many to list. Two that I recommend learning about are vim & nano.

### vim

### nano


# Git: it's like File>Save only collaborative

Seriously. You know how important it is to save your work. We've all been beaten into a sad sack of anger and dissapointment when we've lost our work.

Consider git to be the equivalent of File>Save that keeps track of every version of your work, and allows you to share those versions with other people and collaborate in a way that won't have you overwriting each other's changes.

Git is version control software.

There are many alternatives to git, but it has become a standard for developers in large part because of github.com, a service for hosting code using git.

The best way to start learning git (and GitHub) is to visit [try.github.com](http://try.github.com). You should also try [githug, a game for learning git](https://github.com/Gazler/githug).

## Project website:
http://git-scm.com/

## Install
download / install: http://git-scm.com/downloads

## Documentation
docs: http://git-scm.com/documentation

## Basics

Here are some basics of using git:

Create a git repository:

```
cd name-of-folder
git init
```

Add files:

```
git add name-of-file

// or add all files in directory:

git add .
```

When you add files to a git repository they are "staged" and ready to be committed.

Remove files:
```
git rm name-of-file

// force removal of files:

git rm -rf name-of-file-or-directory
```

Commit files and add a message using the `-m` option:

```
git commit -m 'a message describing the commit'
```

Create a branch:

```
git branch name-of-branch
```

Checkout a branch:

```
git checkout name-of-branch
```

Shortcut for creating a new branch and checking it out:

```
git checkout -b name-of-branch
```

Merge a branch into the master branch:

```
git checkout master
git merge name-of-branch
```

Add a remote repository:

```
git remote add origin git@github.com:yourname/projectname.git
```

List associated repositories:

```
git remote -v
```

Pull changes from a remote repository:

```
git pull origin master
```

Push changes to a remote repository

```
git push origin master
```

Checkout a remote branch:

```
git checkout -t origin/haml
```

## Resources
http://try.github.io/



# GitHub.com: a social network for git users

GitHub is a great place to host your code. Many employers hiring for developer and designer positions will ask for a GitHub profile, and they'll use your GitHub activity as part of the criteria in their decision-making process.

In fact, if you're looking to get a job with a particular company, try to find _their_ GitHub profile and start contributing to their open source projects. This will help you stand out, and they'll already know your technical abilities based on your open source contributions. That's a big win.

GitHub has become the de facto code hosting service for most open source communities.

## Website
http://github.com

## Create an account
If you haven't already, create an account at [github.com](http://github.com).

## Create your first repository

## GitHub Pages

GitHub Pages is a web hosting service offered by GitHub typically used for hosting websites for open source projects that have code hosted on GitHub. In practice, people use it for all kinds of sites. The only limitation is that it is strictly for static sites composed from html, css, and javascript.

Learn more about GitHub Pages: [http://pages.github.com](http://pages.github.com)

### With GitHub Pages you can:
- design a website any way you want by having complete control over the html, css, and javascript.
- use simple templates for getting started using GitHub Pages.
- create sites for yourself and all of your projects hosted on GitHub.
- use a custom domain name if you want!



Visit the [help section for GitHub Pages](https://help.github.com/categories/20/articles) to learn more details about hosting sites on GitHub.

### Host a site for free

GitHub has a useful service called [GitHub Pages](http://pages.github.com) that allows you to host a simple site on their servers for free.

To get started, fork this simple template: [github.com/maxogden/gh-pages-template](https://github.com/maxogden/gh-pages-template).

Visit that github project, make sure you're logged in, and click Fork in the upper right side of the screen.

Fork gh-pages-template to your personal account.

Rename the repository from gh-pages-template to whatever you want by clicking on Settings on the right side of your fork of the repository, and changing the name there. GitHub will warn

That's it! You now have a website hosted through GitHub Pages.

You'll be able to visit your site at __YOUR-USERNAME__.github.com/__YOUR-PROJECT-NAME__.

You'll want to edit the content though, right? Add your cat pictures or resume or pizza recipes? You can do that.

You can create, edit, move, rename, and delete files all through the GitHub website. Check out these blog posts on GitHub for details on how to do those things:
- [Create files](https://github.com/blog/1327-creating-files-on-github)
- [Edit files](https://github.com/blog/143-inline-file-editing)
- [Move and rename files](https://github.com/blog/1436-moving-and-renaming-files-on-github)
- [Delete files](https://github.com/blog/1545-deleting-files-on-github)

You can also clone the project repository onto your computer:

```
git clone git@github.com:__YOUR-USERNAME__/__YOUR-PROJECT-NAME__.git
```

You can copy the git url to clone from the right-hand sidebar of your project repository.

After cloning the repository, `cd` into it and make some changes:

```
cd __YOUR-PROJECT-NAME__
nano index.html
```

Add a bunch of content to index.html, and change the styles in style.css.

After you've made some changes, add them to the repo and commit the changes:

```
git add .
git commit -m 'include a brief, clear message about the changes'
```

Now, push your changes back to GitHub:

```
git push origin gh-pages
```



# Get started

To get ready for working through the upcoming examples, we'll set up a few things.

## Make sure all the software we installed is running

### vagrant

### git

### sublime

## Create a folder for working through examples

Let's make a folder named DevEnvs in your home directory.

On Macs the home directory is:

```
/Users/YOUR-USERNAME
```

On Windows:

```
%userprofile%
```

On Linux:

```
/home/YOUR-USERNAME
```

On Mac, Linux, and recent versions of Windows (in the Powershell terminal / in Windows 7+), there's a useful alias for a user's home directory, the tilde:

```
~
```

So, you can run a command like `cd ~`, and that'll take you to your home directory.

Once you've navigated to your home folder, create the DevEnvs folder:

```
mkdir DevEnvs
```

Change directory into DevEnvs, then create directories for javascript, ruby, and python:

```
cd DevEnvs
mkdir javascript ruby python
```

We'll use these directories to store the examples we work through later in the book.


# Ruby

Ruby is a pleasant language that gets about as close to the English language as possible.

It's popular in large part because of the web development framework Ruby on Rails.

## Language website
http://www.ruby-lang.org/en/

## Documentation
docs: http://www.ruby-lang.org/en/documentation/

## Vagrant

Let's create a vagrant machine in your ruby DevEnvs folder:

```
cd ~/DevEnvs/ruby
```

```
vagrant init
```

## Installing ruby
rbenv / ruby-build / rbenv-vars
https://github.com/sstephenson/rbenv

## Package manager: rubygems

### Use bundler
http://bundler.io/

## Testing: minitest
https://github.com/seattlerb/minitest

## Language basics

## Web framework: sinatra
http://www.sinatrarb.com/

### Simple example

Let's write a simple hello sinatra example app:

```
require 'sinatra'

get '/' do
  'pizza is awesome'
end
```

Let's go through this app line by line:

**Import the sinatra functionality into our app:**

```
require 'sinatra'
```

**Call `get`, to respond to requests for the root url:**

```
get '/' do
```

**Respond to requests with some text:**

```
  'pizza is awesome'
```

**Close the `get` block:**

```
end
```


### Extended example

## Resources

http://tryruby.org/



# Javascript

Javascript is a ubiquitous language. It's getting first class support in various operating sytems, you can use it on the server with node.js, and developing javascript applications that are largely front-end code is becoming a popular and pragmatic practice.

We'll cover javascript on the server using node.js, and briefly cover javascript in the browser.

Javascript development tools have recently seen a big burst of growth thanks to node.js.



## Language website
The website for node.js is pretty great: [http://nodejs.org](http://nodejs.org).

It includes the API documentation, a blog that announces new releases and a link to the website for the package manager used by node developers, npm.

There isn't really a website for the javascript language in the same way ruby and python have websites. For general javascript information look to the documentation websites listed below:



## Documentation

The node.js API documentation:
[http://nodejs.org/api/index.html](http://nodejs.org/api/index.html)

There are a lot of different resources for client-side javascript documentation.

I recommend two:

**Web Platform Docs:** [http://www.webplatform.org/](http://www.webplatform.org/)

The Web Platform Docs is a relatively new set of documentation that includes coverage of html, css, and javscript. It's pretty good, 

**Moxilla Developer Network documentation:** [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

The MDN docs are great. There are bits that are specific to Mozilla, but the majority of the content is relevant to html, css, and javascript in general.

## Vagrant

Let's create a vagrant machine in your javascript DevEnvs folder:

```
cd ~/DevEnvs/javascript
```

```
vagrant init
```

## Installing node.js

I recommend using a tool called `nvm` for installing node.js if you're on mac or linux.

If you're on Windows, install node.js using the .msi package on the nodejs.org downloads page: [http://nodejs.org/downloads](http://nodejs.org/downloads).

**nvm:** [https://github.com/creationix/nvm](https://github.com/creationix/nvm).

**Javascript in the browser:**

You don't need to install anything for javascript in the browser. The browser takes care of that for you. I recommend using Chrome for the examples in this book. Firefox is also excellent, and if you choose to use it, there will be just slight differences between the developer tools compared to Chrome.



## Package manager: npm
When you install node.js, you get npm.

**npm:** [http://npmjs.org](http://npmjs.org)

You may also want to use bower or component, two package managers that specifically target client-side code. Remember that javascript packages distributed are not limited to node.js, and can also be used in the browser in many cases.



## Testing: tape
For testing, we'll use a library named tape.

**tape:** [https://github.com/substack/tape](https://github.com/substack/tape).

### Installing tape

To install tape, we'll use `npm` on the command line. 

Open a terminal.

Change directory to your projects folder.

```
cd ~/Projects
```

Create a directory for our first javascript project:

```
mkdir learn-javascript-one
```

Change directory into our new project folder:

```
cd learn-javascript-one
```

Run this command to create a package.json file:

```
npm init
```

Answer the questions that pop up.

Now, to really install tape:

```
npm install --save-dev tape
```

`npm install` is used to install packages from npm.

`--save-dev` saves the package to your package.json as a development dependency.

`tape` is the package name. You can pass multiple packages at once, separated by commas.

A simple example of a test written with tape:

```
var test = require('tape');

var p = 'pizza';

test('pizza test', function (t) {
  t.plan(1);

  t.equal(p, 'pizza');
});
```

Let's go through this line-by-line in a high-level way.

Here we assign the tape functionality to a variable named `test`:

```
var test = require('tape');
```

Here `p` is assigned to the string `'pizza'`:

```
var p = 'pizza';
```

Now we're calling `test`, and describing it as a `pizza test`:

```
test('pizza test', function (t) {
```

We're given the argument `t` to use to call testing methods.

Here we specify that we plan to have 1 test in our code:

```
  t.plan(1);
```

Here's that one test, making sure that the `p` variable is equal to the string `pizza`:

```
  t.equal(p, 'pizza');
```

This closes the function:

```
});
```

Those are the very basics of using tape. Next, we'll dive deeper into some javascript basics, and use tape to test our code.


## Language basics

We'll start with a simple "hello world" example. We'll do one for node.js, and one for client-side code.

### Hello world

#### Node.js

Change directory into your Projects folder.

#### Browser



## Web framework: express
Express is a small web framework for node.js, originally inspired by sinatra. 

**express:** [http://expressjs.com/](http://expressjs.com/).

### Install

Navigate to your projects folder.

Create a folder named hello-express and navigate into it:

```
mkdir hello-express && cd hello-express
```

```
npm install express
```

This installs express locally so you can use it in your app.

### Simple example

Inside your hello-express directory, create a file named app.js:

```
touch app.js
```

Here's a simple example of an express app:

```
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('pizza is awesome.');
});

app.listen(3000);

console.log('app is listening at localhost:3000');
```

Type that code into your app.js file after we run through it one line at a time:

Save the express module to a variable named express:

```
var express = require('express');
```

Create our app by calling `express()` and assigning the returned object to the variable `app`:

```
var app = express();
```

Exposing a route for the rool url using `app.get()`:

```
app.get('/', function(req, res){
```

`req` is an argument we get from the callback that represents the request. `res` represents the response that we'll be sending back to the user.

Sending a text response:

```
  res.send('pizza is awesome.');
```

Closing the `app.get()` function:

```
});
```

Setting up the app to listen for requests on port 3000:

```
app.listen(3000);
```

Logging a message to the user on the console so that the user knows that the app has started and things are happening:

```
console.log('app is listening at localhost:3000');
```

### Installing express globally

```
npm install -g express
```

The `-g` option installs express globally. This means that there is now an `express` command available in your terminal you can use to create a new express app.

Go ahead and install express globally using the above command, and we'll continue experimenting with express.

### Create an app using the `express` command.

Navigate to your Projects folder and run this command:

```
express new-app
```

This will generate a bunch of files for you. I won't go into the details of what's created, but it's good to know express has this functionality available.


### Extended example



## Resources


# Python

Python is a language that is readable, quick to learn, and used for a wide range of purposes, including web development, science, and in academia.



## Language website

http://www.python.org/



## Documentation

http://www.python.org/doc/


## Vagrant

Let's create a vagrant machine in your ruby DevEnvs folder:

```
cd ~/DevEnvs/ruby
```

```
vagrant init
```


## Installing python
Python is most likely already installed on your machine.

On a mac you can install python with homebrew.



## Package manager: pip
pip: [http://www.pip-installer.org/en/latest/](http://www.pip-installer.org/en/latest/)
https://github.com/pypa/pip



### Use virtualenv
virtualenv: [http://www.virtualenv.org/en/latest/](http://www.virtualenv.org/en/latest/)



## Testing: unittest
unittest: [http://docs.python.org/3/library/unittest.html](http://docs.python.org/3/library/unittest.html)



## Language basics


## Web framework: flask
flask [http://flask.pocoo.org/](http://flask.pocoo.org/)


### Simple example

```
from flask import Flask
app = Flask(__name__)

@app.route('/')
def pizza():
    return 'pizza is awesome'

if __name__ == '__main__':
    app.run()
```

Let's look at this little app line by line:

**Import the flask functionality into our app:**

```
from flask import Flask
```

Create the app by creating an instance of the Flask class:

```
app = Flask(__name__)
```

Define a route for the root url:

```
@app.route('/')
```

Define a function that responds to requests at the

```
def pizza():
    return 'pizza is awesome'
```

The function that immediately follows the `route()` call defines what we'll return when someone visits the root url.

**Run the app:**

```
if __name__ == "__main__":
    app.run()
```

`app.run()` kicks off a server to serve our app. The `if` statement checks if this code is being executed by the Python interpreter or being included as a module, and app.run() is only called if the code is being executed by the Python interpreter.

### Extended example

## Resources

Dive into Python: [http://www.diveintopython.net/](http://www.diveintopython.net/)

Test-driven development in python: [http://net.tutsplus.com/tutorials/python-tutorials/test-driven-development-in-python/](http://net.tutsplus.com/tutorials/python-tutorials/test-driven-development-in-python/)



# Summary

Let's recap some of what we covered by comparing a few of the aspects of developing with ruby, javascript, and python.

## Package managers & dependency management

**Ruby:**

Ruby developers use rubygems for installing packages, and use bundler & the Gemfile for defining dependencies.

**Javascript & Node.js:**

Javascript has npm for installing packages, and you can define dependencies. Remember that npm can be used for client-side code (particulary when using a tool like browserify), but you can also use package managers designed specifically for client-side code, like bower and component, which use bower.json and component.json as the files where you define dependencies.

**Python:**

Python has a few options for installing packages, but I recommend using pip. With pip you'll define dependencies in a requirements.txt file. It's also common to use pip in combination with a tool like virtualenv, which keeps the dependencies of your application separate from what's installed globally on your operating system.


## Simple web framework examples


# What happens next?

Next, you build an app.

Now that you have a development environment set up, the best way to learn a language in depth is to just use it. 
And most important: define a goal for a simple application you can build. Something small, but that solves a real problem for you. Something that automates a repetitive task you find yourself doing regularly.

You'll need a guide to language syntax and API documentation. And doing some further reading about the language of your choice is a good idea.

There are many resources that can help you along the way.


