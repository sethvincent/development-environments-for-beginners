# Javascript

Javascript is a ubiquitous language. It's getting first-class support in various operating sytems, you can use it on the server with node.js, and developing javascript applications that are largely front-end code is becoming a popular and pragmatic practice.

We'll cover javascript on the server using node.js and briefly cover javascript in the browser.

Javascript development tools have recently seen a big burst of growth thanks to node.js.



## Language website
The website for node.js is pretty great: [http://nodejs.org](http://nodejs.org).

It includes the API documentation, a blog that announces new releases and a link to the website for the package manager used by node developers, npm.

There isn't really a website for the javascript language in the same way ruby and python have websites. For general javascript information, look to the documentation websites listed below:



## Documentation

One of the best places to start learning Node.js is [nodeschool.io](http://nodeschool.io/). These are a set of interactive workshops you complete using the terminal. Highly recommended.

Here is the documentation for the node.js API:
[http://nodejs.org/api/index.html](http://nodejs.org/api/index.html)

There are a lot of different resources for documentation on client-side javascript.

Here are two I recommend:

**Web Platform Docs:** [http://www.webplatform.org/](http://www.webplatform.org/)

The Web Platform Docs is a relatively new set of documentation that includes coverage of html, css, and javscript. It's pretty good.

**Mozilla Developer Network documentation:** [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

The MDN docs are great. There are bits that are specific to Mozilla, but the majority of the content is relevant to html, css, and javascript in general.

## Vagrant

Let's create a vagrant machine in your javascript dev-envs folder:

~~~~~~~~
mkdir ~/dev-envs/javascript
cd ~/dev-envs/javascript
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

We'll now install Node.js, its dependencies, and related tools, and get started building applications. Complete all the following instructions while logged in to the vagrant machine.

## Install git & dependencies

To get started, we'll need to install git and some necessary system dependencies while logged in to the virtual machine:

~~~~~~~~
sudo apt-get install git gcc make curl
~~~~~~~~


## Installing node.js

I recommend using a tool called `nvm` for installing node.js if you're on mac or linux. It's very similar to the rbenv tool we used in the last chapter for installing ruby.

If you're on Windows, install node.js using the .msi package on the nodejs.org downloads page: [http://nodejs.org/downloads](http://nodejs.org/downloads).

**nvm:** [https://github.com/creationix/nvm](https://github.com/creationix/nvm).

We have git installed, so we can clone nvm to our home folder:

~~~~~~~~
git clone https://github.com/creationix/nvm.git ~/.nvm
~~~~~~~~

Source nvm to make it the `nvm` command available in the terminal:

~~~~~~~~
source ~/.nvm/nvm.sh
~~~~~~~~

To ensure that `nvm` is available at all times in the terminal, add the above line to your ~/.bashrc file:

~~~~~~~~
nano ~/.bashrc
~~~~~~~~

Add `source ~/.nvm/nvm.sh` to the ~/.bashrc file.

To get the `nvm` command after adding that line to your ~/.bashrc file, source your ~/.bashrc file:

~~~~~~~~
source ~/.bashrc
~~~~~~~~

To ensure `nvm` is working, run the command without options:

~~~~~~~~
nvm
~~~~~~~~

You should see output like this:

~~~~~~~~
Node Version Manager

Usage:
    nvm help                    Show this message
    nvm install [-s] <version>  Download and install a <version>
    nvm uninstall <version>     Uninstall a version
    nvm use <version>           Modify PATH to use <version>
    nvm run <version> [<args>]  Run <version> with <args> as arguments
    nvm ls                      List installed versions
    nvm ls <version>            List versions matching a given description
    nvm ls-remote               List remote versions available for install
    nvm deactivate              Undo effects of NVM on current shell
    nvm alias [<pattern>]       Show all aliases beginning with <pattern>
    nvm alias <name> <version>  Set an alias named <name> pointing to <version>
    nvm unalias <name>          Deletes the alias named <name>
    nvm copy-packages <version> Install global NPM packages contained in <version> to current version

Example:
    nvm install v0.4.12         Install a specific version number
    nvm use 0.2                 Use the latest available 0.2.x release
    nvm run 0.4.12 myApp.js     Run myApp.js using node v0.4.12
    nvm alias default 0.4       Auto use the latest installed v0.4.x version
~~~~~~~~

The above help text gives a good overview of usage of the `nvm` command.


### Now we install node.js

Install the latest version of node v0.10.x:

~~~~~~~~
nvm install 0.10
~~~~~~~~

You'll see output like this:

~~~~~~~~
######################################################################## 100.0%
Now using node v0.10.21
~~~~~~~~

We can switch to that new version using this command:

~~~~~~~~
nvm use 0.10.21
~~~~~~~~

And to set that version as the default, set the default alias:

~~~~~~~~
nvm alias default 0.10.21
~~~~~~~~


## Javascript in the browser

You don't need to install anything for javascript in the browser. The browser takes care of that for you. I recommend using Chrome for the examples in this book. Firefox is also excellent, and if you choose to use it, there will be just slight differences between the developer tools compared to Chrome.

Download Chrome here: [https://www.google.com/intl/en/chrome/browser/](https://www.google.com/intl/en/chrome/browser/)


## Package manager: npm
When you install node.js, you get npm.

**npm:** [http://npmjs.org](http://npmjs.org)

You may also want to use [bower](http://bower.io/) or [component](http://component.io), two package managers that specifically target client-side code. Remember that javascript packages distributed via npm are not limited to node.js, and can also be used in the browser in many cases through the use of module bundlers like [browserify](http://browserify.org) and [webpack](http://webpack.github.io/).

## Build tools / automating repetitive tasks

There are a few ways to automate repetitive tasks in JavaScript projects.

### npm scripts

Using npm scripts and the `npm run` command is a clean, simple method for organizing the build tools of your JavaScript project.

You specify npm scripts by adding to the `scripts` field of a package.json file in your JavaScript project.

Take this example:

```
"scripts": {
  "test": "node test.js",
  "start": "node server.js",
  "bundle": "browserify main.js -o bundle.js"
}
```

We would run `npm test` to test the code, `npm start` to run a development server, and `npm run bundle` to create a bundled JavaScript file using the `browserify` command.

### Grunt

Another, more complicated option is [grunt.js](http://gruntjs.com).

### Install

First, install the grunt command-line tool:

~~~~~~~~
npm install -g grunt-cli
~~~~~~~~

Next, you'll create a Gruntfile.js in your project.

Learn more about grunt.js by reading the [project documentation](http://gruntjs.com/getting-started).

### More information about npm scripts and Grunt

Check out this blog post for more information about npm scripts, Grunt, and how I choose between the two: [http://superbigtree.tumblr.com/post/59519017137/introduction-to-grunt-js-and-npm-scripts-and-choosing](http://superbigtree.tumblr.com/post/59519017137/introduction-to-grunt-js-and-npm-scripts-and-choosing)

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

#### Node.js

When using Node.js we can require the functionality of Node.js modules distributed via npm and code from other files by using the `require` function, typically at the top of the file. An example of requiring the express module:

~~~~~~~~
var express = require('express');
~~~~~~~~

#### Browser

For browser side code we might add a script tag into the HTML file of our project. Here's an example of a script tag:

```
<script src="main.js"></script>
```

Alternately we might use a tool like browserify to require packages using the same method as Node.js. Learn more about browserify at the project website, [browserify.org](http://browserify.org).


## Web framework: express
Express is a small web framework for node.js, originally inspired by sinatra. 

**express:** [http://expressjs.com/](http://expressjs.com/).

### Install

Navigate to your javascript projects folder:

~~~~~~~~
cd ~/dev-envs/javascript
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
    app.locals.posts = JSON.parse(data);
    next();
  });
});

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.get('/post/:slug', function(req, res, next){
  app.locals.posts.forEach(function(post){
    if (req.params.slug === post.slug){
      res.render('post.ejs', { post: post });
    }
  })
});

app.get('/api/posts', function(req, res){
  var data = {
    meta: { name: app.locals.title },
    posts: app.locals.posts 
  }
  res.json(data);
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
    app.locals.posts = JSON.parse(data);
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

The following code block listens for requests for a specific blog post. We iterate through each of the items in our posts array, and if the slug that's passed in the url matches a slug in the posts array, that post is returned:

```
app.get('/post/:slug', function(req, res, next){
  app.locals.posts.forEach(function(post){
    if (req.params.slug === post.slug){
      res.render('post.ejs', { post: post });
    }
  })
});
```

The following is a simple example of exposing a simple json feed of the posts.

```
app.get('/api/posts', function(req, res){
  var data = {
    meta: { name: app.locals.title },
    posts: app.locals.posts 
  }
  res.json(data);
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

Let's make a views folder for all the views to live in:

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
  <meta name="viewport" content="width=device-width">
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

Now add this content to the styles.css file:

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

Try out the ExpressWorks workshop on nodeschool.io: [nodeschool.io/#expressworks](http://nodeschool.io/#expressworks)
