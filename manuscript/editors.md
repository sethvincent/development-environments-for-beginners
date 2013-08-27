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

~~~~~~~~
ln -s "/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl" ~/bin/subl
~~~~~~~~

`ln -s` is a command used for creating symbolic links, which you can think of like aliases.

The first argument is the location of the original file, the second argument is the new, alias location.

Now, you can run the `subl` command on the terminal.

When you run `subl --help`, you'll get help information for the command that looks like this:

~~~~~~~~
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
~~~~~~~~


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

~~~~~~~~
nano filename.txt
~~~~~~~~

Save a file:

~~~~~~~~
control+O
~~~~~~~~

Exit from nano (you'll be prompted to save):

~~~~~~~~
control+X
~~~~~~~~

Search for some text:

~~~~~~~~
control+W
~~~~~~~~