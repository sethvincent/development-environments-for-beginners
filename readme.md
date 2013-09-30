# Development environments for beginners

Thanks for checking out the book! Please consider supporting the work by purchasing the book: [superbigtree.com/books/dev-envs](http://superbigtree.com/books/dev-envs).


# Hello, dear reader.

## Thank you

Thank you for buying this book! It is independently published, and each sale makes a huge difference.

This book is a work in progress, and you'll get all updates for free.

## Why write this?
When I first started programming, learning the languages was the easy part compared to figuring out text editors, version control, testing, and all the different tools that come along with writing code for a real project.

My goal is for this book to help flatten the learning curve a little, so that going from hello world to a working on a complex application isn't quite as difficult for you as it was for me when I started out.

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



# What is a development environment?

### Wait, what is this development environment thing?

Think of it like your workshop.

Except your workshop is pretty much all inside your computer.

A development environment is typically a set of tools isntalled on your computer that consist of everything you need to work on a project.

A development environment is also considered a stage in the workflow, or release cycle, of a project.

### Other stages can include:
- testing
- staging
- production

There can be other stages, too, depending on the complexity of the project and the requirements you must meet for quality assurance and user testing.

## 


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

**Run multiple commands on one line:**

```
&&
```

With `&&` you can chain together multiple commands that execute one after the other. This example creates a directory, then moves you into that new directory:

```
mkdir new-folder && cd new-folder
```


## Aliases, scripting, and environment variables

Aliases allow you to create abbreviated commands that alias long, complex, or regularly used commands.

Here are some examples:




## Windows

You'll likely want to install a tool called cygwin: [http://www.cygwin.com/](http://www.cygwin.com/).

This gives you a linux-like terminal to use.

> _This section of the book is still a work in progress._


# Vagrant: install an operating system inside of your operating system!

Vagrant is a tool for running "virtual machines" on a computer. Let's say your computer is a Mac. With vagrant, you can run a virtual machine with a different operating system on your computer. 

It's almost like dual booting, like having both Windows and Linux installed on a computer, except you have a lot more control over a virtual machine. You can spin one up temporarily to work on a project, and when you're done, destroy the virtual machine.

Vagrant makes this process easy. It relies on virtual machine software – there are a number of options, but we'll use software called virtualbox.

In a way, vagrant is a wrapper around virtualbox – making it easy to create, run, and destroy virtual machines that run from the command line.

The primary operating system on your computer is called the "host" operating system. Any virtual machines you create are called "guest" operating systems.

We'll use the term **box** to describe the virtual machines that we create using vagrant.

## Reasons for using vagrant:
- Keep your host OS clean by installing dependencies for your project in a virtual machine rather than having everything installed on your host OS
- Have the same operating system and same dependencies set up in your virtual machine as you have on the production server, making it easier to deploy your application because there's little difference between the two environments.
- The people on your team can use vagrant so that all of your development environments match, easing issues with some people having issues with developing on a particular operating system.

## Vagrantfiles

Vagrant uses a file named `Vagrantfile` in your project directory as a config file for your vagrant box.

There are many config options you can set. To learn more check out the Vagrantfile section of the vagrant documentation: [http://docs.vagrantup.com/v2/vagrantfile/index.html](http://docs.vagrantup.com/v2/vagrantfile/index.html).

## Website
http://www.vagrantup.com/

## Install

### Virtualbox:

First we install [virtualbox](https://www.virtualbox.org/).

Go to the virtualbox downloads folder: [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads).

Click the link for your operating system to download the virtualbox installer. Once it's finished downloading, run the installer.

If needed, you can follow the **virtualbox installation instructions:** [http://www.virtualbox.org/manual/ch02.html](http://www.virtualbox.org/manual/ch02.html)

#### Documentation

You probably don't need to, but if you want to dig into virtualbox in depth, check out the documentation: [https://www.virtualbox.org/wiki/Documentation](https://www.virtualbox.org/wiki/Documentation).



### Vagrant

Installing vagrant is pretty easy. Just grab the downloader for your operating system from the vagrant downloads page:

**download vagrant:**

[http://downloads.vagrantup.com](http://downloads.vagrantup.com)

You'll see a list of version numbers on that first page – just click the very top one to get the latest release of vagrant.

**installation instructions:**

[http://docs-v1.vagrantup.com/v1/docs/getting-started/index.html#install_vagrant](http://docs-v1.vagrantup.com/v1/docs/getting-started/index.html#install_vagrant)

#### Documentation
docs: [http://docs-v1.vagrantup.com/v1/docs/index.html](http://docs-v1.vagrantup.com/v1/docs/index.html)

## Set up your first vagrant machine

Here's the basics of using vagrant:

Open the terminal on your computer and run this command:

```
vagrant
```

Running the command by itself will show you all the possible sub-commands and options you can pass.

Let's try this thing out.

Navigate to your DevEnvs folder:

```
cd ~/DevEnvs
```

Create a folder named `tmp` and change directory into it:

```
mkdir tmp && cd tmp
```

Run `vagrant init` to create a Vagrantfile in our tmp directory:

```
vagrant init precise32 http://files.vagrantup.com/precise32.box
```

By passing the name `precise32` and the url of the box we want to use, we prepopulate the Vagrantfile with the vagrant box we intend to use for our project. And by passing a url we're letting vagrant know that we want to download the vagrant box, as it isn't on our computer yet. 

precise32 is the name for Ubuntu 12.04 LTS 32-bit.

You should see output on the terminal like this:

```
A `Vagrantfile` has been placed in this directory. You are now
ready to `vagrant up` your first virtual environment! Please read
the comments in the Vagrantfile as well as documentation on
`vagrantup.com` for more information on using Vagrant.
```

Now, run `vagrant up` to boot your vagrant box:

```
vagrant up
```

This does a couple things: because we passed a url to vagrant init, and we  don't already have a box on our machine named precise32, `vagrant up` will first download the precise32 box, then boot it with any configuration that's been set in the Vagrantfile.

You should see output on the terminal like this:

```
Bringing machine 'default' up with 'virtualbox' provider...
[default] Box 'precise32' was not found. Fetching box from specified URL for
the provider 'virtualbox'. Note that if the URL does not have
a box for this provider, you should interrupt Vagrant now and add
the box yourself. Otherwise Vagrant will attempt to download the
full box prior to discovering this error.
Downloading or copying the box...
Extracting box...te: 1727k/s, Estimated time remaining: 0:00:01)
Successfully added box 'precise32' with provider 'virtualbox'!
[default] Importing base box 'precise32'...
[default] Matching MAC address for NAT networking...
[default] Setting the name of the VM...
[default] Clearing any previously set forwarded ports...
[default] Fixed port collision for 22 => 2222. Now on port 2201.
[default] Creating shared folders metadata...
[default] Clearing any previously set network interfaces...
[default] Preparing network interfaces based on configuration...
[default] Forwarding ports...
[default] -- 22 => 2201 (adapter 1)
[default] Booting VM...
[default] Waiting for VM to boot. This can take a few minutes.
[default] VM booted and ready for use!
[default] Configuring and enabling network interfaces...
[default] Mounting shared folders...
[default] -- /vagrant
```

Now that the box is up and running, we can ssh into this instance of Ubuntu that we just set up!

We do that by running `vagrant ssh` in the terminal:

```
vagrant ssh
```

You should see output on the terminal like this:

```
Welcome to Ubuntu 12.04 LTS (GNU/Linux 3.2.0-23-generic-pae i686)

 * Documentation:  https://help.ubuntu.com/
Welcome to your Vagrant-built virtual machine.
Last login: Fri Sep 14 06:22:31 2012 from 10.0.2.2
```

You have now entered your vagrant box. Every command you type in your terminal now happens in this instance of Ubuntu Linux.

To exit from the vagrant box, and take the terminal back to your host operating system, run the `exit` command:

```
exit
```

You prompt should now look the same as before you ran `vagrant ssh`.

Now that we downloaded that precise32 box once, we won't have to do it again. We'll be able to use it for each new project we start.

Next time we're about to create a vagrant box we'll navigate to the project folder and run 'vagrant init' again, like this:

```
vagrant init precise32
```

We don't have to pass in the url, because we've already downloaded the box.

When we run `vagrant up`, the box won't be downloaded, because we've already got a copy of it sitting on our computer. This speeds things up.

To see which boxes you've currently got downloaded run this command:

```
vagrant box list
```




## Alternatives to vagrant/virtualbox

**docker**

Docker is a cool new approach that uses lightweight containers for encapsulating applications. Definitely worth checking out: [http://www.docker.io](http://www.docker.io/).

Go through their getting started tutorial to get a sense of how it works: [http://www.docker.io/gettingstarted](http://www.docker.io/gettingstarted/).

It's also possible to use docker on one of your vagrant machines, which seems like an awesome option. If you're feeling adventurous, check out docker's documentation for integrating with vagrant and virtualbox: [http://docs.docker.io/en/latest/installation/vagrant/](http://docs.docker.io/en/latest/installation/vagrant/).

**nitrous.io**

You can have a development environment that you access through the web using nitrous.io: [https://www.nitrous.io](https://www.nitrous.io/).

This is great if you're on a machine that runs an operating system like ChromeOS, or it's something you can't install software on for whatever reason.

You can set up one "box" for free, and beyond that it costs money.


# Text editors

## Sublime Text Editor

Sublime is a popular text editor with versions for Mac, Windows, and Linux. 

You can download an evaluation copy for free, and pay for a license when you're ready.

In this book we'll be using version 2 of Sublime, in future updates to the book we'll switch to version 3.

### Install
Go to [sublimetext.com](http://www.sublimetext.com/) and click the download button.

This will download a .dmg file. Once the download has completed, double-click the .dmg file. Next, drag the Sublime Text application into your Applications folder.

### Use Sublime from the command line

In order to use Sublime from the command line, you'll need to create a symbolic link:

```
ln -s "/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl" ~/bin/subl
```

`ln -s` is a command used for creating symbolic links, which you can think of like aliases.

The first argument is the location of the original file, the second argument is the new, alias location.

Now, you can run the `subl` command on the terminal.

When you run `subl --help`, you'll get help information for the command that looks like this:

```
Usage: subl [arguments] [files]         edit the given files
   or: subl [arguments] [directories]   open the given directories
   or: subl [arguments] -               edit stdin

Arguments:
  --project <project>: Load the given project
  --command <command>: Run the given command
  -n or --new-window:  Open a new window
  -a or --add:         Add folders to the current window
  -w or --wait:        Wait for the files to be closed before returning
  -b or --background:  Don't activate the application
  -s or --stay:        Keep the application activated after closing the file
  -h or --help:        Show help (this message) and exit
  -v or --version:     Show version and exit

--wait is implied if reading from stdin. Use --stay to not switch back
to the terminal when a file is closed (only relevant if waiting for a file).

Filenames may be given a :line or :line:column suffix to open at a specific
location.
```


### Resources

#### Website
http://www.sublimetext.com/

#### Documentation
docs: http://www.sublimetext.com/docs/2/index.html


### Alternative text editors:
There are too many to list. Two that I recommend learning about are vim & nano.

#### vim

vim has a steep learning curve, so save this for later after you've mastered other tools. To learn more about vim, check out this list of resources: [http://net.tutsplus.com/articles/web-roundups/25-vim-tutorials-screencasts-and-resources/](http://net.tutsplus.com/articles/web-roundups/25-vim-tutorials-screencasts-and-resources/)

#### nano

nano is a simple, easy to use editor that you'll usually find on unix/linux operating systems.

There are a few basic key commands you need to know to start out with nano:

Edit something with nano:

```
nano filename.txt
```

Save a file:

```
control+O
```

Exit from nano (you'll be prompted to save):

```
control+X
```

Search for some text:

```
control+W
```


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
[http://www.ruby-lang.org/en](http://www.ruby-lang.org/en)

## Documentation
docs: [http://www.ruby-lang.org/en/documentation](http://www.ruby-lang.org/en/documentation)

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


We'll be using rbenv to install ruby: [https://github.com/sstephenson/rbenv](https://github.com/sstephenson/rbenv).

We'll also need ruby-build.

## Package manager: rubygems

### Use bundler
http://bundler.io/

## Automating repetitive tasks

For automating tasks in ruby development, use [rake](http://rake.rubyforge.org/).

### Install

First, install the rake gem:

```
gem install rake
```

Next, you'll create a Rakefile in your project.

Learn more about rake by reading the [project documentation](http://rake.rubyforge.org/).

We'll go in-depth with rake in the extended ruby example later in the chapter.

## Testing: minitest
https://github.com/seattlerb/minitest

## Language basics

### variables

Create a variable like this:

```
a = 1
```

### numbers

In ruby there are integers and floats. An integer is a whole number, a float is a decimal.

Integers:

```
1
100
223239
```

Floats:

```
1.0
5.132
3.14
```

### string

A string is a _string of characters_ wrapped in single or double quotes:

```
"this is a string"
'this is also a string'
```

When using double quotes, you can use string interpolation to insert the values of variables into a string:

```
food = 'pizza'
sentence = "#{food} is yummy."
```

The `sentence` variable will return this: `pizza is yummy`.


### array

An array is like a list of values. You can put anything in an array: strings, numbers, other arrays, hashes, etc.

They look like this:

```
things = ['pizza is great.', 30, ['yep', 'ok']]
```

#### Accessing values in an array:

You can access values in an array by typing the variable name followed by square brackets and a number that represents the value you'd like to access.

Arrays are zero-indexed, so the first item is represented by a zero:

```
things[0]
```

This returns `'pizza is great'`.

To get at nested arrays, you add another set of square brackets, like this:

```
things[2][1]
```

The above statement returns `'ok'`.


### hash

A hash is much like an array, except instead of the values being indexed by numbers, they have names.

A simple hash looks like this:

```
pizza = { :tastes => 'really good', :slices_i_can_eat => 100 }
```

There's also an alternate, more concise syntax for creating a hash that looks like this:

```
pizza = { tastes: 'really good', slices_i_can_eat: 100 }
```

#### Accessing hash values

Accessing values in a hash looks similar to arrays:

```
pizza[:tastes]
```

The above statement returns `'really good'`.

```
pizza[:slices_i_can_eat]
```

The above statement returns `100`. That's a lot of slices of pizza.

### function

A function definition is super simple:

```
def eat(food)
  return "I ate #{food}."
end
```

`def` indicates that we're about to define a function.

`eat` is the name of the function.

In parentheses, we indicate that one argument is expected, `food`.

This line: `return "I ate #{food}."` indicates that `"I ate #{food}."` will be returned when the function is called.

We can actually rewrite that line to exclude the `return` keyword. The last statement in a function will get returned automatically. Since we only have one line in this function we don't need `return'.

#### Calling a function

Now that the function is defined, you can call it like this:

```
eat('pizza')
```

That statement will return: `'I ate pizza.'`.

The parenthese are optional, so we can write the function call like this:

```
eat 'pizza' 
```

### class

Define a class in ruby like this:

```
class Meal
  # here we'll define methods on the class
end
```

### class methods

Class methods are basically functions that exist inside of a class namespace.

```
class Meal

  def initialize(food)
    @food = food
  end
  
  def prepare
    @prepared = true
    "#{@food} is ready!"
  end

  def eat
    if @prepared == true
      "dang, that #{@food} sure was good."
    else
      "relax, the #{@food} isn't prepared yet."
    end
  end

end
```

### class instance

Now, to use our Meal class and call the `prepare` and `eat` methods, we do this:

```
dinner = Meal.new 'pizza'
```

We can call a method by typing the name of the class instance, followed by a period and the name of the method. Let's try out the `eat` method:

```
dinner.eat
```

That's return this string: `"relax, the pizza isn't prepared yet."`.

So let's `prepare` the dinner:

```
dinner.prepare
```

That'll return this string: `"pizza is ready!"`.

Now run `dinner.eat` and we'll see this string: `"dang, that pizza sure was good."`.


### importing/requiring code

We can require the functionality of ruby gems and code from other files by using the `require` statement, typically at the top of the file. An example of requiring the sinatra gem:

```
require 'sinatra'
```

## Web framework: sinatra
Project website: [http://www.sinatrarb.com](http://www.sinatrarb.com/).

### Install

Navigate to your ruby projects folder:

```
cd ~/DevEnvs/ruby
```

Create a folder named hello-sinatra and navigate into it:

```
mkdir hello-sinatra && cd hello-sinatra
```

```
gem install sinatra
```

### Simple example

Inside your hello-sinatra directory, create a file named app.rb:

```
touch app.rb
```

Here's a simple example of a sinatra app:

```
require 'sinatra'

get '/' do
  'pizza is awesome'
end
```

Type that code into your app.rb file.

Now you can run your app with this command:

```
ruby app.rb
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

### Sinatra resources

Learn more about sinatra at the sinatra website: [http://www.sinatrarb.com](http://www.sinatrarb.com/)

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

## Automating repetitive tasks

For automating tasks in javascript development, use [grunt.js](http://gruntjs.com).

### Install

First, install the grunt command-line tool:

```
npm install -g grunt-cli
```

Next, you'll create a Gruntfile.js in your project.

Learn more about grunt.js by reading the [project documentation](http://gruntjs.com/getting-started).

We'll go in-depth with grunt in the extended javascript example later in the chapter.

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

### Variables

#### Creating a variable:

```
var nameOfVariable;
```

> Variables are camelCase, meaning first letter is lowercase, and if the variable is made of multiple words, the first letter of following words are capitalized.

#### Creating a variable that references a string:

```
var thisIsAString = 'this is a string';
```

Surround strings with single quotes.


#### Creating a variable that references a number:

```
var thisIsANumber = 3.14;
```

Numbers do not have quotes around them.

#### Creating a variable that references an array:

```
var thisIsAnArray = [1, "two", [3, 4]];
```

Note that one of the values in the array is a number, one is a string, and another is an array. Arrays can hold any value in any order.

#### Accessing the values in an array:

```
thisIsAnArray[0];
```

The above will return the number `1`. Arrays use numbers as the index of their values, and with javascript an array's index always start at `0`, making `0` reference the first value of the array.

```
thisIsAnArray[1];
```

This returns the string 'two';

##### How would you return the number `4` from the nested array?

Like this:

```
thisIsAnArray[2][1];
```

#### Creating a variable that references an object:

var thisIsAnObject = {
  someString: 'some string value',
  someNumber: 1234,
  someFunction: function(){
    return 'a function that belongs to an object';
  }
}

Here we're setting `someString` to `'some string value'`, `someNumber' to `1234`, and we're creating a function named `someFunction` that returns the string `'a function that belongs to an object'`. So how do we access these values?

To get the value of `someString` using dot notation:

```
thisIsAnObject.someString;
```

Or using bracket notation:

```
thisIsAnObject['someString'];
```

To get the value of `someNumber` using dot notation:

```
thisIsAnObject.someNumber;
```

Or using bracket notation:

```
thisIsAnObject['someNumber'];
```

To use the function `someFunction` using dot notation:

```
thisIsAnObject.someFunction();
```

Or using bracket notation:

```
thisIsAnObject['someFunction']();
```

Using square bracket notations with functions looks a little wacky. It will be useful if you are storing function names in variables as strings, and need to use the variable to call the function being stored. Otherwise, stick with dot notation.
That goes for other attributes on an object, too: stick with dot notation unless there's a good reason to use bracket notation.

For instance, it's more clear to use bracket notation in a situation like this:

```
for (var key in object){
  thisIsAnObject[key];
}
```

This gives you an idea of how to iterate through an object using a for...in loop.

### importing/requiring code

We'll start with a simple "hello world" example. We'll do one for node.js, and one for client-side code.

### Hello world

#### Node.js

Change directory into your Projects folder.

#### Browser



## Web framework: express
Express is a small web framework for node.js, originally inspired by sinatra. 

**express:** [http://expressjs.com/](http://expressjs.com/).

### Install

Navigate to your javascript projects folder:

```
cd ~/DevEnvs/javascript
```

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

Type that code into your app.js file

You can run your app with this command:

```
node app.js
```

Now let's run through app.js one line at a time:

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

Let's make a small website with [express](http://expressjs.com) to explore how it works.

In this example our site will do three things:  
- serve html at the root route from a view that has a list of posts
- serve html for a single post at `/post/:id`
- serve json at `/api/posts` that has a list of posts

We won't be using a database for this example, but instead will use a json file with a list of posts.

To get started, create and change directory into a new project folder, then run `npm init` to create a package.json file.

```
mkdir express-example
cd express-example
```

We'll be using express and for templates we'll use the [ejs](https://github.com/visionmedia/ejs "ejs") module, so let's install those dependencies:

```
npm install --save express ejs
```

We will use [nodemon](https://github.com/remy/nodemon "nodemon") to run the app – nodemon will automatically restart the server each time you edit a file in the project.

Install nodemon:

```
npm install -g nodemon
```

Run nodemon with these options so that changes to ejs views and public files also trigger the restart:

```
nodemon -e js,css,html,ejs
```

Create a file named posts.json with the following json:

```
[
{
  "title": "This is the first post",
  "slug": "first-post",
  "content": "The pizza is awesome. The pizza is awesome. The pizza is awesome. The pizza is awesome. The pizza is awesome. The pizza is awesome. The pizza is awesome. The pizza is awesome. The pizza is awesome. The pizza is awesome. The pizza is awesome."
},
{
  "title": "Another post that you might like",
  "slug": "second-post",
  "content": "Eating pizza is great. Eating pizza is great. Eating pizza is great. Eating pizza is great. Eating pizza is great. Eating pizza is great. Eating pizza is great. Eating pizza is great. Eating pizza is great. Eating pizza is great. Eating pizza is great. Eating pizza is great."
},
{
  "title": "The third and last post",
  "slug": "third-post",
  "content": "The pizza always runs out. The pizza always runs out. The pizza always runs out. The pizza always runs out. The pizza always runs out. The pizza always runs out. The pizza always runs out. The pizza always runs out. The pizza always runs out. The pizza always runs out. The pizza always runs out. The pizza always runs out. The pizza always runs out. The pizza always runs out."
}
]
```

First we'll create the app.js file:

```
var express = require('express');
var fs = require('fs');
var app = express();

app.use('/public', express.static(__dirname + '/public'));

app.locals({
  title: 'Extended Express Example'
});

app.all('*', function(req, res, next){
  fs.readFile('posts.json', function(err, data){
    res.locals.posts = JSON.parse(data);
    next();
  });
});

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.get('/post/:slug', function(req, res, next){
  res.locals.posts.forEach(function(post){
    if (req.params.slug === post.slug){
      res.render('post.ejs', { post: post });
    }
  })
});

app.get('/api/posts', function(req, res){
  res.json(res.locals.posts);
});

app.listen(3000);
console.log('app is listening at localhost:3000');
```

Let's break down this example code chunk by chunk:

Require the needed modules and create the app variable:

```
var express = require('express');
var fs = require('fs');
var app = express();
```

Set up the app to serve whatever is in the public folder at the url `/public/:filename`:

```
app.use('/public', express.static(__dirname + '/public'));
```

You can add local variables that can be used in views and throughout the app by passing an object to `app.locals()`:

```
app.locals({
  title: 'Extended Express Example'
});
```

In this example we're loading the posts from the json file before responding to routes:

```
app.all('*', function(req, res, next){
  fs.readFile('posts.json', function(err, data){
    res.locals.posts = JSON.parse(data);
    next();
  });
});
```

When a browser requests the root url, our app responds with the index.ejs file. Express automatically looks in a folder named views, so you only have to pass the file name:

```
app.get('/', function(req, res){
  res.render('index.ejs');
});
```

The following code block listens for requests for a specific blog post. We search the items in our posts array, and if the slug that's passed in the url matches a slug in the posts array, that post is returned:

```
app.get('/post/:slug', function(req, res, next){
  res.locals.posts.forEach(function(post){
    if (req.params.slug === post.slug){
      res.render('post.ejs', { post: post });
    }
  })
});
```

The following is a simple example of exposing a simple json feed of the posts:

```
app.get('/api/posts', function(req, res){
  res.json(res.locals.posts);
});
```
And finally, we make the app listen on port 3000, and print a message to the terminal:

```
app.listen(3000);
console.log('app is listening at localhost:3000');
```

Next, we'll need the views for rendering html. We'll use a templating language named ejs for our views.

The only downside to ejs is that it doesn't allow us to specify a layout view like we did with sinatra and erb.

To get around that we'll create header and footer views that we later include on other views.

Let's a views folder for all the views to live in:

```
mkdir views
```

And create all the view files that we need:

```
touch views/header.ejs views/footer.ejs views/index.ejs views/post.ejs
```

Add this content to the header.ejs file:

```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title><%= title %></title>
  <link rel="stylesheet" href="/public/styles.css">
</head>
<body>

<header>
  <div class="container">
    <h1><a href="/"><%= title %></a></h1>
  </div>
</header>
```

Add this content to the footer.ejs file:

```
<footer>
  <div class="container">
    <p>Posts are also available via json at <a href="/api/posts">/api/posts</a>/
  </div>
</footer>

</body>
</html>
```

Add this content to the index.ejs file:

```
<% include header %>

<main role="main">
  <div class="container">
    <% posts.forEach(function(post){ %>
      <h3>
        <a href="/post/<%= post.slug %>">
          <%= post.title %>
        </a>
      </h3>
      <div><%= post.content %></div>
    <% }); %>
  </main>
</div>

<% include footer %>
```

Add this content to the post.ejs file:

```
<% include header %>

<main role="main">
  <div class="container">
    <h3><%= post.title %></h3>
    <div><%= post.content %></div>
  </main>
</div>

<% include footer %>
```

Let's add some css styling so this looks a little more readable.

First create the public folder and the styles.css file:

```
mkdir public
touch public/styles.css
```

Now add this content the styles.css file:

```
body {
  font: 16px/1.5 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #787876;
}

h1, h3 {
  font-weight: 300;
  margin-bottom: 5px;
}

a {
  text-decoration: none;
  color: #EA6045;
}

a:hover {
  color: #2F3440;
}

.container {
  width: 90%;
  margin: 0px auto;
}

footer {
  margin-top: 30px;
  border-top: 1px solid #efefef;
  padding-top: 20px;
  font-style: italic;
}

@media (min-width: 600px){
  .container {
    width: 60%;
  }
}
```

You should now be able to navigate on the home page, three blog post pages, and the posts json feed. Run the project with the nodemon command:

```
nodemon -e js,css,html,ejs
```


### Express resources

Learn more about express at the express website: [http://expressjs.com](http://expressjs.com/)

## Resources


# Python

Python is a language that is readable, quick to learn, and used for a wide range of purposes, including web development, science, and in academia.

In this chapter we'll review some basics of the Python language, testing with UnitTest, creating dev environments with pip and virtualenv, and building apps with flask, a small web development framework.

We'll be working with Python version 2.7, which should be installed by default on most systems, and is still best supported by various Python libraries. In the future we'll do an update to this book to support Python 3.


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



## Package manager: pip
pip: [http://www.pip-installer.org/en/latest/](http://www.pip-installer.org/en/latest/)
https://github.com/pypa/pip



### Use virtualenv
virtualenv: [http://www.virtualenv.org/en/latest/](http://www.virtualenv.org/en/latest/)


## Automating repetitive tasks

For automating tasks in python development, use [fabric](http://fabfile.org).

### Install

First, install fabric:

```
pip install fabric
```

Next, you'll create a fabfile.py in your project.

Learn more about fabric by reading the [project documentation](http://docs.fabfile.org/en/1.7/).

We'll go in-depth with fabric in the extended python example later in the chapter.



## Testing: unittest
We'll be using unittest as the testing framework with python. It comes bundled with python so it doesn't have to be installed separately.

unittest documentation: [http://docs.python.org/2.7/library/unittest.html](http://docs.python.org/2.7/library/unittest.html)

Here's a very simple example of unittest usage:

A simple example of a test written with tape:

```
import unittest

class PizzaTest(unittest.TestCase):

    def setUp(self):
        self.pizza = 'pizza'

    def test_pizza(self):
        self.assertEqual(self.pizza, 'pizza')

if __name__ -- '__main__':
    unittest.main()
```

## Language basics

### variables

Create a variable like this:

```
some_variable = 'some value'
```

### numbers

```
some_number = 3
```

A number is any digit, including decimals, or floating point numbers.

### string

```
some_string = 'this is a string'
```

You can create multi-line strings like this:

```
some_big_string = """
This is one line of the string.
And this is another.
This line is also part of the string.
"""
```

A string is text surrounded by single or double quotes.

### list

A list in python is very similar to an array in javascript and ruby. Create a list like this:

```
some_list = ['a', 1, 'b']
```

It's possible to nest lists like this:

```
some_nested_list = [1, ['a', 'b', 'c'], 'pizza'];
```

### dictionary

Dictionaries in python are similar to objects in javascript or hashes in ruby.

Create a dictionary like this:

```
some_dictionary = { 'thing': 'one', 'otherthing': 'two' }
```

### function

Define a function in python like this:

```
def eat(food):
    return 'I ate ' + food
```

### class

Create a class in python like this:

```
class Meal:
    # here we define methods on the class
```


### method

Defining methods in python looks like this:

```
class Meal:
  def __init__(self, food):
      self.food = food

  def eat(self)
      return 'I ate ' + self.food
```

### class instance

Create an instance of the class like this:

```
dinner = Meal('pizza')
dinner.eat()
```

### importing/requiring code

To import code into your program, use this syntax:

```
import PACKAGENAME
```

You can import specific classes with this syntax:

```
from PACKAGENAME import CLASS
```

For instance, with the flask library we use later, importing flask looks like this:

```
from flask import Flask
```

## Web framework: flask
flask [http://flask.pocoo.org/](http://flask.pocoo.org/)

Navigate to your python projects folder:

```
cd ~/DevEnvs/python
```

Create a folder named hello-flask and navigate into it:

```
mkdir hello-flask && cd hello-flask
```

```
pip install flask
```

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

Type that code into your app.py file.

Now you can run your app with this command:

```
python app.py
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

### Flask resources

Learn more about flask at the project website: [http://flask.pocoo.org/](http://flask.pocoo.org/)

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

**Ruby:**

```
require 'sinatra'

get '/' do
  'pizza is awesome'
end
```

Look at how tiny and pleasant that ruby code is!

**Javascript:**

```
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('pizza is awesome.');
});

app.listen(3000);

console.log('app is listening at localhost:3000');
```

Express doesn't automatically take care of listening on a default port, or telling the user that the app is listening, so that adds just a small amount of extra code compared to the ruby/sinatra example.

**Python:**

```
from flask import Flask
app = Flask(__name__)

@app.route('/')
def pizza():
    return 'pizza is awesome'

if __name__ == '__main__':
    app.run()
```

Python feels different because of it's use of meaningful whitespace and lack of curly brackets or `do end` for blocks. Everything is just indented 4 spaces instead to represent blocks of code.

These three examples still feel very similar, though. That's no coincidence. Both express and flask wer inspired by sinatra's clean and simple API.


# What happens next?

Next, you build an app.

Now that you have a development environment set up, the best way to learn a language in depth is to just use it. 
And most important: define a goal for a simple application you can build. Something small, but that solves a real problem for you. Something that automates a repetitive task you find yourself doing regularly.

You'll need a guide to language syntax and API documentation. And doing some further reading about the language of your choice is a good idea.

There are many resources that can help you along the way.


# Changelog

## v0.1.3 - September 27, 2013
- Add to unittest and other edits in python section
- Add extended express example to javascript section

## v0.1.2 - September 3, 2013
- added rake, grunt, and fabric sections
- initial work on python language basics

## v0.1.1 - August 18, 2013
- added language basics to javascript and ruby chapters
- added a bunch to vagrant chapter
- added to terminal chapter

## v0.1.0 - August 17, 2013
- started all chapters!


