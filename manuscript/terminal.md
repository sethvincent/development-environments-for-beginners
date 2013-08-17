# Terminal: conquer the command line

Get excited, it's time to use the terminal.

The most important thing to keep in mind: don't be afraid of the terminal.

You can only break your computer using the terminal if you do really weird stuff. I mean, you mostly have to go out of your way to break your computer. Most commands are completely harmless. There are a few ways you can crunch your machine, so it's worthwhile to be skeptical about new commands and research what they do before you use them.

## Mac / Linux

For most purposes, daily activity in the terminal will be the same in Mac and various Linux distros.

### Basic commands:

Changing directory:

~~~~~~~~
cd path/of/directories
~~~~~~~~

`cd` on its own, or `cd ~` will take you to your home directory.

Create a directory:

~~~~~~~~
mkdir directory-name
~~~~~~~~

Show the directory you're currently in:

~~~~~~~~
pwd
~~~~~~~~

List the files in the directory:

~~~~~~~~
ls
~~~~~~~~

List the files in a more readable way, with useful information like permissions included:

~~~~~~~~
ls -al
~~~~~~~~

Open a file with its default application:

~~~~~~~~
open filename
~~~~~~~~

Open current directory in the finder:

~~~~~~~~
open .
~~~~~~~~

or open some other directory:

~~~~~~~~
open path/to/directory
~~~~~~~~

Create an empty file if it doesn't already exist:

~~~~~~~~
touch file-name
~~~~~~~~

Open and edit a file with the simple nano editor:

~~~~~~~~
nano file-name
~~~~~~~~

Move a file or directory:

~~~~~~~~
mv file new/path/to/file
~~~~~~~~

Rename a file or directory:

~~~~~~~~
mv file new-file-name
~~~~~~~~

Copy a file:

~~~~~~~~
cp file name-of-file-copy
~~~~~~~~

Copy a directory

~~~~~~~~
cp -R directory directory-copy
~~~~~~~~

The `-R` option allows for recursive copying of files inside the directory.


Delete a file:

~~~~~~~~
rm file-name
~~~~~~~~

Delete a directory and its contents:

~~~~~~~~
rm -rf path/to/directory
~~~~~~~~

Let's dissect this command:

`rm` is for deleting things.

`-rf` means that files will be recursively deleted, and the deletion will be forced. `r` is for recursive, `f` is for forced.

**Never do this:**

~~~~~~~~
rm -rf /
~~~~~~~~

Be very careful with the rm command. You can easily delete things on accident.

This command is deleting with the `rm` command, recursively forcing the deletion of files and folders with `-rf`, and we've passed the root directory, `/` as the thing to delete. This means it will delete everything on your hard drive. Some operating systems protect against this mistake, and if you're not the root user you would need to prefix this command with `sudo` to make it work. Be careful, and be nice.

**Clear the terminal screen of previous activity:**

~~~~~~~~
clear
~~~~~~~~

**Reset the terminal:**

~~~~~~~~
reset
~~~~~~~~

**Stop a running process:**

~~~~~~~~
control+C
~~~~~~~~

If a process is running in the terminal and you need to stop it, press the `control` key and the `C` key at the same time.

## Windows

You'll likely want to install a tool called cygwin: [http://www.cygwin.com/](http://www.cygwin.com/)

> This section of the book is still a work in progress.