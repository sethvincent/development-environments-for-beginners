# Javascript

Javascript is a ubiquitous language. It's getting first class support in various operating sytems, you can use it on the server with node.js, and developing javascript applications that are largely front-end code is becoming a popular and pragmatic practice.

We'll cover javascript on the server using node.js, and briefly cover javascript in the browser.

Javascript development tools have recently seen a big burst of growth thanks to node.js.



## Language website
[http://nodejs.org](http://nodejs.org)



## Documentation

The node.js API documentation:
[http://nodejs.org/api/index.html](http://nodejs.org/api/index.html)

There are a lot of different resources for client-side javascript documentation.

I recommend two:

**Web Platform Docs:** [http://www.webplatform.org/](http://www.webplatform.org/)

The Web Platform Docs is a relatively new set of documentation that includes coverage of html, css, and javscript. It's pretty good, 

**Moxilla Developer Network documentation:** [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

The MDN docs are great. There are bits that are specific to Mozilla, but the majority of the content is relevant to html, css, and javascript in general.


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

We'll start with a simple "hello world" example. We'll do one for node.js, and one for client-side code.

### Hello world

#### Node.js

Change directory into your Projects folder.

#### Browser



## Web framework: express
Express is a small web framework for node.js, originally inspired by sinatra. 

**express:** [http://expressjs.com/](http://expressjs.com/).



## Resources