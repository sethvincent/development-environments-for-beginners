# Summary

Let's recap some of what we covered by comparing a few of the aspects of developing with ruby, javascript, and python.

## Package managers & dependency management

**Ruby:**

Ruby developers use rubygems for installing packages, and use bundler & the Gemfile for defining dependencies.

**Javascript & Node.js:**

Javascript has npm for installing packages, and you can define dependencies. Remember that npm can be used for client-side code (particulary when using a tool like browserify), but you can also use package managers designed specifically for client-side code, like bower and component, which use bower.json and component.json as the files where you define dependencies.

**Python:**

Python has a few options for installing packages, but I recommend using pip. With pip you'll define dependencies in a requirements.txt file. It's also common to use pip in combination with a tool like virtualenv, which keeps the dependencies of your application separate from what's installed globally on your operating system.

## Build tools / task automation

We took a quick look at npm scripts and Grunt for JavaScript, rake for Ruby, and fabric for Python, providing a glimpse of the differences in the way the build tools work with each language.

## Simple web framework examples

**Ruby:**

~~~~~~~~
require 'sinatra'

get '/' do
  'pizza is awesome'
end
~~~~~~~~

Look at how tiny and pleasant that ruby code is!

**Javascript:**

~~~~~~~~
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('pizza is awesome.');
});

app.listen(3000);

console.log('app is listening at localhost:3000');
~~~~~~~~

Express doesn't automatically take care of listening on a default port, or telling the user that the app is listening, so that adds just a small amount of extra code compared to the ruby/sinatra example.

**Python:**

~~~~~~~~
from flask import Flask
app = Flask(__name__)

@app.route('/')
def pizza():
    return 'pizza is awesome'

if __name__ == '__main__':
    app.run()
~~~~~~~~

Python feels different because of it's use of meaningful whitespace and lack of curly brackets or `do end` for blocks. Everything is just indented 4 spaces instead to represent blocks of code.

These three examples still feel very similar, though. That's no coincidence. Both express and flask were inspired by sinatra's clean and simple API.

# Continued learning

## Other books

There's a good chance that if you like this book you'll be interested in the other books in the Learn.js series.

**Check them out!**

- [Introduction to JavaScript & Node.js](http://learnjs.io/books/learnjs-01)
- [Making 2d Games with Node.js & Browserify](http://learnjs.io/books/learnjs-02)
- [Mapping with Leaflet.js](http://learnjs.io/books/learnjs-03)
- [Theming with Ghost](http://themingwithghost.com)
- [npm recipes](http://learnjs.io/npm-recipes)

Learn more at [learnjs.io](http://learnjs.io).
