# Terminal: conquer the command line

Get excited, it's time to use the terminal.

The most important thing to keep in mind: don't be afraid of the terminal.

You can only break your computer from the terminal if you do really weird stuff.


## Mac / Linux

For most purposes, daily activity in the terminal will be the same in Mac and various Linux distros.

Basic commands include:

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

Never do this:

~~~~~~~~
rm -rf /
~~~~~~~~

Be very careful with the rm command. You can easily delete things on accident.

Clear the terminal screen of previous activity:

~~~~~~~~
clear
~~~~~~~~

Reset the terminal:

~~~~~~~~
reset
~~~~~~~~


## Windows

> This section of the book is still a work in progress.