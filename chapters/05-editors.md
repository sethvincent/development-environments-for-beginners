# Text editors

## Sublime Text Editor

Sublime is a popular text editor with versions for Mac, Windows, and Linux. 

You can download an evaluation copy for free, and pay for a license when you're ready.

In this book we'll be using version 2 of Sublime, in future updates to the book we'll switch to version 3.

### Install
Go to [sublimetext.com](http://www.sublimetext.com/) and click the download button.

This will download a .dmg file. Once the download has completed, double-click the .dmg file. Next, drag the Sublime Text application into your Applications folder.

### Use Sublime from the command line

To use Sublime from the command line using Mac or Linux, you'll need to create a symbolic link:

~~~~~~~~
ln -s "/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl" ~/bin/subl
~~~~~~~~

If you get an error you may need to create the `bin` folder:

~~~~~~~~
mkdir ~/bin
~~~~~~~~

And add `~/bin` to your path:

Add:

~~~~~~~~
export PATH="$PATH:~/bin"
~~~~~~~~

To your `~/.profile` file.


#### About `ln -s`

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

### Tips for using Sublime

#### Searching files

##### Basic Search
To do a basic text search, press `Command + f` to open the search bar.

Here you can choose to use regular expressions or simple string searches.

You can cycle through instances of a search phrase by clicking **Find** and **Find Prev**, and you can highlight all instances of a search phrase by clicking **Find All**.

Exit the search bar by pressing the `esc` key.

##### Search all project files
To search all files in your project, press `Shift + Command + f` to open the search panel. 

After you enter a search phrase in the **Find** input, press enter or click **Find**. A new tab will then open with all relevant search results.

In the **Where** input you can specify files and folders that you want to search. Click the `...` button to the right of the input field to use a GUI to add and remove files and folders.

Optionally you can use the **Replace** input to specify a phrase to replace the search phrase.

To exit this search panel press the `esc` key.

##### Finding and switching between files
Use the `Command + P` keyboard shortcut to bring up a menu that allows you to quickly navigate to other files in the project. Start typing the name of the file to filter the results.

##### Finding specific methods or functions
Use the `Command + R` keyboard shortcut to get a menu that allows you to find classes, methods, functions, variable declarations, and other important pieces of code. Like the file menu mentioned above, you can start typing a name to filter the results.

##### Jumping to a specific line number
There are two ways: `Control + G`, enter the line number, and hit return. Or `Command + P`, type a colon, then the line number, then hit return.

#### Fun with multiple cursors
One of the most enjoyable features of Sublime (and similar text editors) is being able to use multiple cursors for quickly editing multiple parts of a text file.

##### Search and Find All
One way to get multiple cursors in a file is by searching using `Command + f`, entering a search phrase, and clicking **Find All**. This will heighlight all instances of the search phrase. Next you can press the left and right arrows to navigate around the text and make revisions like normal, only you'll be editing the text in multiple places.

##### Selecting multiple instances of a word with `Command + d`
An even faster way of selecting multiple instances of a word is by clicking a word, then pressing `Command + d`. Pressing it once will select the word that the cursor was on. Pressing it repeatedly will select the next instance of the word in the text document, and eventually wrap around to the top of the file until it has searched up to the original word you clicked on. Hold down `Command + d` to quickly select all instances of the word the cursor is on.

A shortcut to selecting all instances of a word at once is through the use of `Command + Control + G` on Mac or `Alt + F3` on Windows.

##### Using the `option` key
By holding the `option` key and dragging up and down in a straight line over rows of text you'll create a cursor on each row of text.

##### Indenting quickly with `Command + {` and `Command + }`
Select a block of text and indent it to the left with `Command + {` and to the right with `Command + }`.

#### Start and end of files and lines with the `Command` and arrow keys.
By holding `Command` and using the arrow keys you can quickly move to the start and end of the file and lines of text.

`Command + Left Arrow` moves the cursor to the left side of the text line the cursor is on.

`Command + Right Arrow` moves the cursor to the right side of the text line the cursor is on.

`Command + Up Arrow` moves the cursor to the top of the text document.

`Command + Down Arrow` moves the cursor to the bottom of the text document.

By holding the `Shift` key along with any of the above four key combinations allows you to select text from the cursor's starting location to ending location of the cursor determined by the command.

This is particularly useful for selecting a line of text. Use `Command + Right Arrow` to go to the end of the line, then `Shift + Command + Left Arrow` to select that entire line of text.

#### Using the Sublime console

Open the console using `ctrl + ` (control plus the backtick key) or by going to **View > Show Console** in the top menu.

This is a Python console that uses Sublime's embedded version of Python intended for interacting with the Sublime plugin API.


#### Compatibility with TextMate
You can use TextMate snippets, color schemes, `.tmLanguage` files, and `.tmPreferences` files with Sublime 2.


### Installing Sublime packages with Package Control

You can easily install third-party packages in Sublime to add new functionality by using a package manager called Package Control. This is useful for adding new color schemes, language syntax highlighters, 

The Package Control website: [sublime.wbond.net](https://sublime.wbond.net)

#### Installing Package Control

Install Package control by copying and pasting the following code into the Sublime console (press `Control + ` to open the console).

~~~~~~~~
import urllib2,os; pf='Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler( ))); open( os.path.join( ipp, pf), 'wb' ).write( urllib2.urlopen( 'http://sublime.wbond.net/' +pf.replace( ' ','%20' )).read()); print( 'Please restart Sublime Text to finish installation')
~~~~~~~~

Next you'll need to restart Sublime.

#### Finding and installing Packages


### Resources

#### Website
Check out the main Sublime website: [sublimetext.com](http://www.sublimetext.com/)

#### Documentation
Official Sublime documentation: [sublimetext.com/docs/2](http://www.sublimetext.com/docs/2/)

Sublime Text unofficial documentation: [docs.sublimetext.info/en/sublime-text-2](http://docs.sublimetext.info/en/sublime-text-2)


### Alternative text editors:
There are too many to list. Two that I recommend learning about are vim & nano.

#### vim

vim has a steep learning curve, so save this for later after you've mastered other tools. To learn more about vim, check out this list of resources: [net.tutsplus.com/articles/web-roundups/25-vim-tutorials-screencasts-and-resources/](http://net.tutsplus.com/articles/web-roundups/25-vim-tutorials-screencasts-and-resources/)

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