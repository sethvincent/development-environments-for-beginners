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

~~~~~~~~
cd ~/DevEnvs/javascript
~~~~~~~~

~~~~~~~~
vagrant init
~~~~~~~~

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

~~~~~~~~
npm install -g grunt-cli
~~~~~~~~

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

~~~~~~~~
cd ~/Projects
~~~~~~~~

Create a directory for our first javascript project:

~~~~~~~~
mkdir learn-javascript-one
~~~~~~~~

Change directory into our new project folder:

~~~~~~~~
cd learn-javascript-one
~~~~~~~~

Run this command to create a package.json file:

~~~~~~~~
npm init
~~~~~~~~

Answer the questions that pop up.

Now, to really install tape:

~~~~~~~~
npm install --save-dev tape
~~~~~~~~

`npm install` is used to install packages from npm.

`--save-dev` saves the package to your package.json as a development dependency.

`tape` is the package name. You can pass multiple packages at once, separated by commas.

A simple example of a test written with tape:

~~~~~~~~
var test = require('tape');

var p = 'pizza';

test('pizza test', function (t) {
  t.plan(1);

  t.equal(p, 'pizza');
});
~~~~~~~~

Let's go through this line-by-line in a high-level way.

Here we assign the tape functionality to a variable named `test`:

~~~~~~~~
var test = require('tape');
~~~~~~~~

Here `p` is assigned to the string `'pizza'`:

~~~~~~~~
var p = 'pizza';
~~~~~~~~

Now we're calling `test`, and describing it as a `pizza test`:

~~~~~~~~
test('pizza test', function (t) {
~~~~~~~~

We're given the argument `t` to use to call testing methods.

Here we specify that we plan to have 1 test in our code:

~~~~~~~~
  t.plan(1);
~~~~~~~~

Here's that one test, making sure that the `p` variable is equal to the string `pizza`:

~~~~~~~~
  t.equal(p, 'pizza');
~~~~~~~~

This closes the function:

~~~~~~~~
});
~~~~~~~~

Those are the very basics of using tape. Next, we'll dive deeper into some javascript basics, and use tape to test our code.


## Language basics

### Variables

#### Creating a variable:

~~~~~~~~
var nameOfVariable;
~~~~~~~~

> Variables are camelCase, meaning first letter is lowercase, and if the variable is made of multiple words, the first letter of following words are capitalized.

#### Creating a variable that references a string:

~~~~~~~~
var thisIsAString = 'this is a string';
~~~~~~~~

Surround strings with single quotes.


#### Creating a variable that references a number:

~~~~~~~~
var thisIsANumber = 3.14;
~~~~~~~~

Numbers do not have quotes around them.

#### Creating a variable that references an array:

~~~~~~~~
var thisIsAnArray = [1, "two", [3, 4]];
~~~~~~~~

Note that one of the values in the array is a number, one is a string, and another is an array. Arrays can hold any value in any order.

#### Accessing the values in an array:

~~~~~~~~
thisIsAnArray[0];
~~~~~~~~

The above will return the number `1`. Arrays use numbers as the index of their values, and with javascript an array's index always start at `0`, making `0` reference the first value of the array.

~~~~~~~~
thisIsAnArray[1];
~~~~~~~~

This returns the string 'two';

##### How would you return the number `4` from the nested array?

Like this:

~~~~~~~~
thisIsAnArray[2][1];
~~~~~~~~

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

~~~~~~~~
thisIsAnObject.someString;
~~~~~~~~

Or using bracket notation:

~~~~~~~~
thisIsAnObject['someString'];
~~~~~~~~

To get the value of `someNumber` using dot notation:

~~~~~~~~
thisIsAnObject.someNumber;
~~~~~~~~

Or using bracket notation:

~~~~~~~~
thisIsAnObject['someNumber'];
~~~~~~~~

To use the function `someFunction` using dot notation:

~~~~~~~~
thisIsAnObject.someFunction();
~~~~~~~~

Or using bracket notation:

~~~~~~~~
thisIsAnObject['someFunction']();
~~~~~~~~

Using square bracket notations with functions looks a little wacky. It will be useful if you are storing function names in variables as strings, and need to use the variable to call the function being stored. Otherwise, stick with dot notation.
That goes for other attributes on an object, too: stick with dot notation unless there's a good reason to use bracket notation.

For instance, it's more clear to use bracket notation in a situation like this:

~~~~~~~~
for (var key in object){
  thisIsAnObject[key];
}
~~~~~~~~

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

~~~~~~~~
cd ~/DevEnvs/javascript
~~~~~~~~

Create a folder named hello-express and navigate into it:

~~~~~~~~
mkdir hello-express && cd hello-express
~~~~~~~~

~~~~~~~~
npm install express
~~~~~~~~

This installs express locally so you can use it in your app.

### Simple example

Inside your hello-express directory, create a file named app.js:

~~~~~~~~
touch app.js
~~~~~~~~

Here's a simple example of an express app:

~~~~~~~~
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('pizza is awesome.');
});

app.listen(3000);

console.log('app is listening at localhost:3000');
~~~~~~~~

Type that code into your app.js file

You can run your app with this command:

~~~~~~~~
node app.js
~~~~~~~~

Now let's run through app.js one line at a time:

Save the express module to a variable named express:

~~~~~~~~
var express = require('express');
~~~~~~~~

Create our app by calling `express()` and assigning the returned object to the variable `app`:

~~~~~~~~
var app = express();
~~~~~~~~

Exposing a route for the rool url using `app.get()`:

~~~~~~~~
app.get('/', function(req, res){
~~~~~~~~

`req` is an argument we get from the callback that represents the request. `res` represents the response that we'll be sending back to the user.

Sending a text response:

~~~~~~~~
  res.send('pizza is awesome.');
~~~~~~~~

Closing the `app.get()` function:

~~~~~~~~
});
~~~~~~~~

Setting up the app to listen for requests on port 3000:

~~~~~~~~
app.listen(3000);
~~~~~~~~

Logging a message to the user on the console so that the user knows that the app has started and things are happening:

~~~~~~~~
console.log('app is listening at localhost:3000');
~~~~~~~~

### Installing express globally

~~~~~~~~
npm install -g express
~~~~~~~~

The `-g` option installs express globally. This means that there is now an `express` command available in your terminal you can use to create a new express app.

Go ahead and install express globally using the above command, and we'll continue experimenting with express.

### Create an app using the `express` command.

Navigate to your Projects folder and run this command:

~~~~~~~~
express new-app
~~~~~~~~

This will generate a bunch of files for you. I won't go into the details of what's created, but it's good to know express has this functionality available.


### Extended example

### Express resources

Learn more about express at the express website: [http://expressjs.com](http://expressjs.com/)

## Resources