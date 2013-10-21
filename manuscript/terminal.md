# Terminal: conquer the command line

Get excited, it's time to use the terminal.

The most important thing to keep in mind: don't be afraid of the terminal.

You can only break your computer using the terminal if you do really weird stuff. I mean, you mostly have to go out of your way to break your computer. There are a few ways you can crunch your machine, so it's worthwhile to be skeptical about new commands and research what they do before you use them.

Each command that you run on the terminal will use a pattern similar to this:

~~~~~~~~
name-of-command --options input-file-or-text output
~~~~~~~~

The `name-of-command` is the actual command. Options are often preceeded by two dashes, or they can likely be shorted to one dash and the first letter or an abbreviation. Then, there will occasionally be some kind of input text or file that the command is acting on, or changing. Similarly, you might specify a filename for the output of the command. You'll see that many of the commands below are more simple.

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

**Run multiple commands on one line:**

~~~~~~~~
&&
~~~~~~~~

With `&&` you can chain together multiple commands that execute one after the other. This example creates a directory, then moves you into that new directory:

~~~~~~~~
mkdir new-folder && cd new-folder
~~~~~~~~


## Aliases and environment variables


### Aliases

Aliases allow you to create abbreviated commands that alias long, complex, or regularly used commands.

Here is an example:

~~~~~~~~
alias l="ls -al"
~~~~~~~~

The above aliases the `ls -al` command to a shortened `l`.

To create an alias you will open the .bashrc file in your home folder.

Open the .bashrc file with nano:

~~~~~~~~
nano ~/.bashrc
~~~~~~~~

Add the following alias to the bottom of the file:

~~~~~~~~
alias pizza="echo 'pizza is awesome!'"
~~~~~~~~

Save the file by pressing `control + O`.

Exit nano by pressing `control + x`.

### Environment variables

Environment variables represent values that are useful across for processes running on your computer.

#### Reading an environment variable:

In the terminal, run the following:

~~~~~~~~
echo $HOME
~~~~~~~~

If you're logged into a vagrant machine, you'll see output like this:

~~~~~~~~
/home/vagrant
~~~~~~~~

This is your home folder, also known as your user folder.

On a Mac you'll see output like this:

~~~~~~~~
/Users/your-user-name
~~~~~~~~

#### Setting an environment variable

In the terminal, set an environment variable like this:

~~~~~~~~
PIZZA="ooooooh, pizza"
~~~~~~~~

Now, you can read the variable the same as we did before:

~~~~~~~~
echo $PIZZA
~~~~~~~~

If you close or reset your terminal session, you'll lose this temporary variable. To save an environment variable so it can be accessed in all your sessions, we'll place the definition of the variable in the ~/.bashrc file.

Open the ~/.bashrc file:

~~~~~~~~
nano ~/.bashrc
~~~~~~~~

Add the following to the bottom of the ~/.bashrc file:

~~~~~~~~
export PIZZA="ooooooh, pizza"
~~~~~~~~

Source the .bashrc file:

~~~~~~~~
source ~/.bashrc
~~~~~~~~

Now, you can close the terminal window, open a new one, and run the following command:

~~~~~~~~
echo $PIZZA
~~~~~~~~

And you'll still see the following output:

~~~~~~~~
ooooooh, pizza
~~~~~~~~




## Windows

You'll likely want to install a tool called cygwin: [http://www.cygwin.com/](http://www.cygwin.com/).

This gives you a linux-like terminal to use.

> _This section of the book is still a work in progress._