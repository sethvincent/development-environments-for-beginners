# Python

Python is a language that is readable, quick to learn, and used for a wide range of purposes, including web development, science, and in academia.

In this chapter we'll review some basics of the Python language, testing with UnitTest, creating dev environments with pip and virtualenv, and building apps with flask, a small web development framework.

We'll be working with Python version 2.7, which should be installed by default on most systems, and is still best supported by various Python libraries. In the future we'll do an update to this book to support Python 3.


## Language website
http://www.python.org/

## Documentation
http://www.python.org/doc/


## Vagrant

Let's create a vagrant machine in your python dev-envs folder:

~~~~~~~~
mkdir ~/dev-envs/python
cd ~/dev-envs/python
~~~~~~~~

Create a new vagrant machine using the Ubuntu Precise box:

~~~~~~~~
vagrant init precise32
~~~~~~~~

Now start the vagrant machine:

~~~~~~~~
vagrant up
~~~~~~~~

If all goes well that'll result in output similar to the following:

~~~~~~~~
Bringing machine 'default' up with 'virtualbox' provider...
[default] Importing base box 'precise32'...
[default] Matching MAC address for NAT networking...
[default] Setting the name of the VM...
[default] Clearing any previously set forwarded ports...
[default] Fixed port collision for 22 => 2222. Now on port 2200.
[default] Creating shared folders metadata...
[default] Clearing any previously set network interfaces...
[default] Preparing network interfaces based on configuration...
[default] Forwarding ports...
[default] -- 22 => 2200 (adapter 1)
[default] Booting VM...
[default] Waiting for VM to boot. This can take a few minutes.
[default] VM booted and ready for use!
[default] Configuring and enabling network interfaces...
[default] Mounting shared folders...
[default] -- /vagrant
~~~~~~~~

Now we will log in to the vagrant machine. This will be very much like using the `ssh` command to log in to a remote server.

Use this command:

~~~~~~~~
vagrant ssh
~~~~~~~~

You should see output similar to the following:

~~~~~~~~
Welcome to Ubuntu 12.04 LTS (GNU/Linux 3.2.0-23-generic-pae i686)

 * Documentation:  https://help.ubuntu.com/
Welcome to your Vagrant-built virtual machine.
Last login: Fri Sep 14 06:22:31 2012 from 10.0.2.2
~~~~~~~~

We'll now install python, its dependencies, and related tools, and get started building applications. Complete all the following instructions while logged in to the vagrant machine.

## Install git & dependencies

To get started, we'll need to install git and some necessary system dependencies while logged in to the virtual machine:

~~~~~~~~
sudo apt-get install git python-setuptools python-dev build-essential
~~~~~~~~


## Installing python
Python is most likely already installed on your machine.



## Package manager: pip
pip: [http://www.pip-installer.org/en/latest/](http://www.pip-installer.org/en/latest/)
https://github.com/pypa/pip



### Use virtualenv
virtualenv: [http://www.virtualenv.org/en/latest/](http://www.virtualenv.org/en/latest/)


## Build tools / automating repetitive tasks

For automating tasks in python development, use [fabric](http://fabfile.org).

### Install

First, install fabric:

~~~~~~~~
pip install fabric
~~~~~~~~

Create a fabfile.py in your project directory:

~~~~~~~~
touch fabfile.py
~~~~~~~~

Add this example to your fabfile.py:

~~~~~~~~
from fabric.api import local

def start():
    local("python app.py")
~~~~~~~~

Run this command:

~~~~~~~~
fab start
~~~~~~~~

The start task defined in your fabfile.py will be executed.


Learn more about fabric by reading the [project documentation](http://docs.fabfile.org/en/1.7/).


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
cd ~/dev-envs/python
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

Let's make a small website with [flask](http://flask.pocoo.org/) to explore how it works.

In this example our site will do three things:  
- serve html at the root route from a view that has a list of posts
- serve html for a single post at `/post/:id`
- serve json at `/api/posts` that has a list of posts

We won't be using a database for this example, but instead will use a json file with a list of posts.

We'll be using the default template language that flask uses, [jinja](http://jinja.pocoo.org/). Let's install flask by creating a virtualenv and using pip:

~~~~~~~~
virtualenv flask-example
cd flask-example
~~~~~~~~

Activate the virtualenv:

~~~~~~~~
source bin/activate
~~~~~~~~

Now use pip to install flask and its dependencies

~~~~~~~~
pip install flask
~~~~~~~~

For this project we'll put the source files inside the virtualenv folder. Create a new folder called source for our application code:

~~~~~~~~
mkdir source
cd source
~~~~~~~~

Your directory structure should now look like this:

~~~~~~~~
flask-example
- bin
- source
- include
- lib
~~~~~~~~

Make sure you put new files inside the source folder.

We'll run the application with this command:

~~~~~~~~
python app.py
~~~~~~~~

Create a file named posts.json with the following json:

~~~~~~~~
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
~~~~~~~~

Now create the app.py file:

~~~~~~~~
from flask import Flask, render_template, g, jsonify
import json


app = Flask('extended-flask-example')
app.config['DEBUG'] = True


@app.before_request
def before_request():
    g.title = 'Extended flask example'
    posts = open('posts.json')
    g.posts = json.load(posts)
    posts.close()


@app.route('/')
def index():
    posts = getattr(g, 'posts', None)
    return render_template('index.html', posts=posts)


@app.route('/post/<slug>')
def show_post(slug):
    for post in g.posts:
        if slug == post['slug']:
            return render_template('post.html', post=post)


@app.route('/api/posts')
def show_json():
    meta = { 'name': g.title }
    return jsonify(posts=g.posts, meta=meta)


if __name__ == '__main__':
    app.run()
~~~~~~~~

Let's break down this example code chunk by chunk:

Require the necessary python libraries. Note that there are multiple classes from the flask library that we're importing individually:

~~~~~~~~
from flask import Flask, render_template, g, jsonify
import json
~~~~~~~~


Create the application with a name and turn on debug so the application will reload each time you make changes to the app.py file and provide useful error messages:

~~~~~~~~
app = Flask('extended-flask-example')
app.config['DEBUG'] = True
~~~~~~~~

Create global variables that are available to our views using the before method, which runs before a request is processed. Here we're loading the posts.json file into the application so we can use it in our views:

~~~~~~~~
@app.before_request
def before_request():
    g.title = 'Extended flask example'
    posts = open('posts.json')
    g.posts = json.load(posts)
    posts.close()
~~~~~~~~

Serve the index.html template on the root url with the following code block. Note that with flask, templates are the equivalent to views in sinatra or express. Flask automatically looks in a folder named templates, so you only have to specify the filename:

~~~~~~~~
@app.route('/')
def index():
    posts = getattr(g, 'posts', None)
    return render_template('index.html', posts=posts)
~~~~~~~~

The following code block listens for requests for a specific blog post. We iterate through each of the items in our posts array, and if the slug that's passed in the url matches a slug in the posts array, we render the page with that post set as the `post` variable.

~~~~~~~~
@app.route('/post/<slug>')
def show_post(slug):
    for post in g.posts:
        if slug == post['slug']:
            return render_template('post.html', post=post)
~~~~~~~~

The following is a simple example of exposing a simple json feed of the posts:

~~~~~~~~
@app.route('/api/posts')
def show_json():
    meta = { 'name': g.title }
    return jsonify(posts=g.posts, meta=meta)
~~~~~~~~

Finally, this code block checks to make sure our application is not a module being loaded into another application, and then runs the app. This is particularly useful in the case that your app might be used on its own or as part of another application:

~~~~~~~~
if __name__ == '__main__':
    app.run()
~~~~~~~~


Next, we'll need the templates for rendering html.

Let's make a templates folder for all the templates to live in:

~~~~~~~~
mkdir templates
~~~~~~~~

And create all the template files that we need:

~~~~~~~~
touch templates/base.html templates/index.html templates/post.html
~~~~~~~~

Add this content to the base.html file:

~~~~~~~~
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>{{ g.title }}</title>
  <link rel="stylesheet" href="{{ url_for('static', filename='styles.css') }}">
</head>
<body>

<header>
  <div class="container">
    <h1><a href="/">{{ g.title }}</a></h1>
  </div>
</header>

<main role="main">
  <div class="container">
    {% block content %}{% endblock %}
  </div>
</main>

<footer>
  <div class="container">
    <p>Posts are also available via json at <a href="/api/posts">/api/posts</a>/
  </div>
</footer>

</body>
</html>
~~~~~~~~

Add this content to the index.html file:

~~~~~~~~
{% extends "base.html" %}

{% block content %}

{% for post in posts %}
<h3>
  <a href="/post/{{ post.slug }}">
    {{ post.title }}
  </a>
</h3>
<div>{{ post.content }}</div>
{% endfor %}

{% endblock %}
~~~~~~~~

Add this content to the post.erb file:

~~~~~~~~
{% extends "base.html" %}

{% block content %}

<h3>{{ post.title }}</h3>
<div>{{ post.content }}</div>

{% endblock %}
~~~~~~~~

Let's add some css styling so this looks a little more readable. By default flask will look in a folder named static for static files.

First create the static folder and the styles.css file:

~~~~~~~~
mkdir static
touch static/styles.css
~~~~~~~~

Now add this content to the styles.css file:

~~~~~~~~
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
~~~~~~~~

You should now be able to navigate on the home page, three blog post pages, and the posts json feed. Run the project with the nodemon command:

~~~~~~~~
python app.py
~~~~~~~~

### Accessing the site in the browser

After starting the app with `shotgun`, you should see this output on the command line:

~~~~~~~~
Running on http://127.0.0.1:5000/
~~~~~~~~

You can now open a browser and navigate to http://localhost:5000 to view the site.

### Flask resources

Learn more about flask at the project website: [http://flask.pocoo.org/](http://flask.pocoo.org/)

## Resources

Dive into Python: [http://www.diveintopython.net/](http://www.diveintopython.net/)

Test-driven development in python: [http://net.tutsplus.com/tutorials/python-tutorials/test-driven-development-in-python/](http://net.tutsplus.com/tutorials/python-tutorials/test-driven-development-in-python/)
