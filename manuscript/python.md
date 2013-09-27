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

~~~~~~~~
cd ~/DevEnvs/ruby
~~~~~~~~

~~~~~~~~
vagrant init
~~~~~~~~


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

~~~~~~~~
pip install fabric
~~~~~~~~

Next, you'll create a fabfile.py in your project.

Learn more about fabric by reading the [project documentation](http://docs.fabfile.org/en/1.7/).

We'll go in-depth with fabric in the extended python example later in the chapter.



## Testing: unittest
We'll be using unittest as the testing framework with python. It comes bundled with python so it doesn't have to be installed separately.

unittest documentation: [http://docs.python.org/2.7/library/unittest.html](http://docs.python.org/2.7/library/unittest.html)

Here's a very simple example of unittest usage:

A simple example of a test written with tape:

~~~~~~~~
import unittest

class PizzaTest(unittest.TestCase):

    def setUp(self):
        self.pizza = 'pizza'

    def test_pizza(self):
        self.assertEqual(self.pizza, 'pizza')

if __name__ -- '__main__':
    unittest.main()
~~~~~~~~

## Language basics

### variables

Create a variable like this:

~~~~~~~~
some_variable = 'some value'
~~~~~~~~

### numbers

~~~~~~~~
some_number = 3
~~~~~~~~

A number is any digit, including decimals, or floating point numbers.

### string

~~~~~~~~
some_string = 'this is a string'
~~~~~~~~

You can create multi-line strings like this:

~~~~~~~~
some_big_string = """
This is one line of the string.
And this is another.
This line is also part of the string.
"""
~~~~~~~~

A string is text surrounded by single or double quotes.

### list

A list in python is very similar to an array in javascript and ruby. Create a list like this:

~~~~~~~~
some_list = ['a', 1, 'b']
~~~~~~~~

It's possible to nest lists like this:

~~~~~~~~
some_nested_list = [1, ['a', 'b', 'c'], 'pizza'];
~~~~~~~~

### dictionary

Dictionaries in python are similar to objects in javascript or hashes in ruby.

Create a dictionary like this:

~~~~~~~~
some_dictionary = { 'thing': 'one', 'otherthing': 'two' }
~~~~~~~~

### function

Define a function in python like this:

~~~~~~~~
def eat(food):
    return 'I ate ' + food
~~~~~~~~

### class

Create a class in python like this:

~~~~~~~~
class Meal:
    # here we define methods on the class
~~~~~~~~


### method

Defining methods in python looks like this:

~~~~~~~~
class Meal:
  def __init__(self, food):
      self.food = food

  def eat(self)
      return 'I ate ' + self.food
~~~~~~~~

### class instance

Create an instance of the class like this:

~~~~~~~~
dinner = Meal('pizza')
dinner.eat()
~~~~~~~~

### importing/requiring code

To import code into your program, use this syntax:

~~~~~~~~
import PACKAGENAME
~~~~~~~~

You can import specific classes with this syntax:

~~~~~~~~
from PACKAGENAME import CLASS
~~~~~~~~

For instance, with the flask library we use later, importing flask looks like this:

~~~~~~~~
from flask import Flask
~~~~~~~~

## Web framework: flask
flask [http://flask.pocoo.org/](http://flask.pocoo.org/)

Navigate to your python projects folder:

~~~~~~~~
cd ~/DevEnvs/python
~~~~~~~~

Create a folder named hello-flask and navigate into it:

~~~~~~~~
mkdir hello-flask && cd hello-flask
~~~~~~~~

~~~~~~~~
pip install flask
~~~~~~~~

### Simple example

~~~~~~~~
from flask import Flask
app = Flask(__name__)

@app.route('/')
def pizza():
    return 'pizza is awesome'

if __name__ == '__main__':
    app.run()
~~~~~~~~

Type that code into your app.py file.

Now you can run your app with this command:

~~~~~~~~
python app.py
~~~~~~~~

Let's look at this little app line by line:

**Import the flask functionality into our app:**

~~~~~~~~
from flask import Flask
~~~~~~~~

Create the app by creating an instance of the Flask class:

~~~~~~~~
app = Flask(__name__)
~~~~~~~~

Define a route for the root url:

~~~~~~~~
@app.route('/')
~~~~~~~~

Define a function that responds to requests at the

~~~~~~~~
def pizza():
    return 'pizza is awesome'
~~~~~~~~

The function that immediately follows the `route()` call defines what we'll return when someone visits the root url.

**Run the app:**

~~~~~~~~
if __name__ == "__main__":
    app.run()
~~~~~~~~

`app.run()` kicks off a server to serve our app. The `if` statement checks if this code is being executed by the Python interpreter or being included as a module, and app.run() is only called if the code is being executed by the Python interpreter.

### Extended example

### Flask resources

Learn more about flask at the project website: [http://flask.pocoo.org/](http://flask.pocoo.org/)

## Resources

Dive into Python: [http://www.diveintopython.net/](http://www.diveintopython.net/)

Test-driven development in python: [http://net.tutsplus.com/tutorials/python-tutorials/test-driven-development-in-python/](http://net.tutsplus.com/tutorials/python-tutorials/test-driven-development-in-python/)
