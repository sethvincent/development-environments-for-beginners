# Ruby

Ruby is a pleasant language that gets about as close to the English language as possible.

It's popular in large part because of the web development framework Ruby on Rails.

## Language website
[http://www.ruby-lang.org/en](http://www.ruby-lang.org/en)

## Documentation
docs: [http://www.ruby-lang.org/en/documentation](http://www.ruby-lang.org/en/documentation)

## Vagrant

Let's create a vagrant machine in your ruby dev-envs folder:

~~~~~~~~
mkdir ~/dev-envs/ruby
cd ~/dev-envs/ruby
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

We'll now install ruby and related tools, and get started building applications. 

**Complete all the following instructions while logged in to the vagrant machine.**

## Install git & dependencies

To get started, we'll need to install git and some necessary system dependencies while logged in to the virtual machine:

~~~~~~~~
sudo apt-get install git gcc make zlib1g zlib1g-dev
~~~~~~~~

## Installing ruby

We'll be using rbenv to install ruby: [https://github.com/sstephenson/rbenv](https://github.com/sstephenson/rbenv).

We'll also need ruby-build: [https://github.com/sstephenson/ruby-build](https://github.com/sstephenson/ruby-build).

### Install rbenv into `~/.rbenv`.

~~~~~~~~
git clone https://github.com/sstephenson/rbenv.git ~/.rbenv
~~~~~~~~

### Make sure `~/.rbenv/bin` is in your `$PATH` so you can use the `rbenv` command-line utility.

~~~~~~~~
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
~~~~~~~~

### To use shims and autocompletion with rbenv, add `rbenv init` to your ~/.bashrc file.

~~~~~~~~
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
~~~~~~~~

### Source the ~/.bashrc file so that the `rbenv` command is available.

~~~~~~~~
source ~/.bashrc
~~~~~~~~

### Check if rbenv was set up by running the `rbenv` command:

~~~~~~~~
rbenv
~~~~~~~~

If `rbenv` was successfully installed, you'll see the following help output:

~~~~~~~~
Usage: rbenv <command> [<args>]

Some useful rbenv commands are:
   commands    List all available rbenv commands
   local       Set or show the local application-specific Ruby version
   global      Set or show the global Ruby version
   shell       Set or show the shell-specific Ruby version
   rehash      Rehash rbenv shims (run this after installing executables)
   version     Show the current Ruby version and its origin
   versions    List all Ruby versions available to rbenv
   which       Display the full path to an executable
   whence      List all Ruby versions that contain the given executable

See `rbenv help <command>' for information on a specific command.
For full documentation, see: https://github.com/sstephenson/rbenv#readme
~~~~~~~~

### Install ruby-build

In order to install different versions of ruby using rbenv, we'll install the ruby-build tool.

~~~~~~~~
git clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
~~~~~~~~

Now we can install a new version of ruby using the `ruby install` command.

To see a list of the names of all possible ruby versions and implementations you can install, run this command:

~~~~~~~~
rbenv install -l
~~~~~~~~

Let's install the latest version of ruby 2.0, which as of this writing is 2.0.0-p247 using this command:

~~~~~~~~
rbenv install 2.0.0-p247
~~~~~~~~

This will download and install the latest ruby. It'll take a while, so take a break for a few minutes.

If you want to set this new ruby version as the default, which I recommend doing for now, run this command:

~~~~~~~~
rbenv global 2.0.0-p247
~~~~~~~~

This sets ruby 2.0.0-p247 as the global ruby, so it'll always be the version used with your projects in this vagrant machine.


### Install rbenv-gem-rehash

By default you would need to run `rbenv rehash` every time you install new gems to set up rbenv shims for each of the bin commands associated with the new gems. This rbenv plugin makes it so you don't have to run `rbenv rehash` each time.

~~~~~~~~
git clone https://github.com/sstephenson/rbenv-gem-rehash.git ~/.rbenv/plugins/rbenv-gem-rehash
~~~~~~~~

## Package manager: rubygems

To install ruby packages, you'll use the `gem` command.

For example, basic `gem` command usage looks like this:

~~~~~~~~
gem install some-package-name
~~~~~~~~

As an example, we'll install the bundler gem, which we'll put to use later:

~~~~~~~~
gem install bundler
~~~~~~~~

## Build tools / automating repetitive tasks

For automating tasks in ruby development, use [rake](http://rake.rubyforge.org/).

### Install

First, install the rake gem:

~~~~~~~~
gem install rake
~~~~~~~~

Create a Rakefile for your project:

```
touch Rakefile
```

Add this simple example to your Rakefile:

```
task :default => [:start]

task :start do
  ruby "app.rb"
end
```

When you run this command on the terminal:

```
rake
```

The start task defined in your Rakefile will be executed.

Learn more about rake by reading the [project documentation](http://rake.rubyforge.org/).


## Testing: minitest
https://github.com/seattlerb/minitest

## Language basics

### variables

Create a variable like this:

~~~~~~~~
a = 1
~~~~~~~~

### numbers

In ruby there are integers and floats. An integer is a whole number, a float is a decimal.

Integers:

~~~~~~~~
1
100
223239
~~~~~~~~

Floats:

~~~~~~~~
1.0
5.132
3.14
~~~~~~~~

### string

A string is a _string of characters_ wrapped in single or double quotes:

~~~~~~~~
"this is a string"
'this is also a string'
~~~~~~~~

When using double quotes, you can use string interpolation to insert the values of variables into a string:

~~~~~~~~
food = 'pizza'
sentence = "#{food} is yummy."
~~~~~~~~

The `sentence` variable will return this: `pizza is yummy`.


### array

An array is like a list of values. You can put anything in an array: strings, numbers, other arrays, hashes, etc.

They look like this:

~~~~~~~~
things = ['pizza is great.', 30, ['yep', 'ok']]
~~~~~~~~

#### Accessing values in an array:

You can access values in an array by typing the variable name followed by square brackets and a number that represents the value you'd like to access.

Arrays are zero-indexed, so the first item is represented by a zero:

~~~~~~~~
things[0]
~~~~~~~~

This returns `'pizza is great'`.

To get at nested arrays, you add another set of square brackets, like this:

~~~~~~~~
things[2][1]
~~~~~~~~

The above statement returns `'ok'`.


### hash

A hash is much like an array, except instead of the values being indexed by numbers, they have names.

A simple hash looks like this:

~~~~~~~~
pizza = { :tastes => 'really good', :slices_i_can_eat => 100 }
~~~~~~~~

There's also an alternate, more concise syntax for creating a hash that looks like this:

~~~~~~~~
pizza = { tastes: 'really good', slices_i_can_eat: 100 }
~~~~~~~~

#### Accessing hash values

Accessing values in a hash looks similar to arrays:

~~~~~~~~
pizza[:tastes]
~~~~~~~~

The above statement returns `'really good'`.

~~~~~~~~
pizza[:slices_i_can_eat]
~~~~~~~~

The above statement returns `100`. That's a lot of slices of pizza.

### function

A function definition is super simple:

~~~~~~~~
def eat(food)
  return "I ate #{food}."
end
~~~~~~~~

`def` indicates that we're about to define a function.

`eat` is the name of the function.

In parentheses, we indicate that one argument is expected, `food`.

This line: `return "I ate #{food}."` indicates that `"I ate #{food}."` will be returned when the function is called.

We can actually rewrite that line to exclude the `return` keyword. The last statement in a function will get returned automatically. Since we only have one line in this function we don't need `return'.

#### Calling a function

Now that the function is defined, you can call it like this:

~~~~~~~~
eat('pizza')
~~~~~~~~

That statement will return: `'I ate pizza.'`.

The parenthese are optional, so we can write the function call like this:

~~~~~~~~
eat 'pizza' 
~~~~~~~~

### class

Define a class in ruby like this:

~~~~~~~~
class Meal
  # here we'll define methods on the class
end
~~~~~~~~

### class methods

Class methods are basically functions that exist inside of a class namespace.

~~~~~~~~
class Meal

  def initialize(food)
    @food = food
  end
  
  def prepare
    @prepared = true
    "#{@food} is ready!"
  end

  def eat
    if @prepared == true
      "dang, that #{@food} sure was good."
    else
      "relax, the #{@food} isn't prepared yet."
    end
  end

end
~~~~~~~~

### class instance

Now, to use our Meal class and call the `prepare` and `eat` methods, we do this:

~~~~~~~~
dinner = Meal.new 'pizza'
~~~~~~~~

We can call a method by typing the name of the class instance, followed by a period and the name of the method. Let's try out the `eat` method:

~~~~~~~~
dinner.eat
~~~~~~~~

That's return this string: `"relax, the pizza isn't prepared yet."`.

So let's `prepare` the dinner:

~~~~~~~~
dinner.prepare
~~~~~~~~

That'll return this string: `"pizza is ready!"`.

Now run `dinner.eat` and we'll see this string: `"dang, that pizza sure was good."`.


### importing/requiring code

We can require the functionality of ruby gems and code from other files by using the `require` statement, typically at the top of the file. An example of requiring the sinatra gem:

~~~~~~~~
require 'sinatra'
~~~~~~~~

## Web framework: sinatra
Project website: [http://www.sinatrarb.com](http://www.sinatrarb.com/).

### Install

Navigate to your ruby projects folder:

~~~~~~~~
cd ~/dev-envs/ruby
~~~~~~~~

Create a folder named hello-sinatra and navigate into it:

~~~~~~~~
mkdir hello-sinatra && cd hello-sinatra
~~~~~~~~

~~~~~~~~
gem install sinatra
~~~~~~~~

### Simple example

Inside your hello-sinatra directory, create a file named app.rb:

~~~~~~~~
touch app.rb
~~~~~~~~

Here's a simple example of a sinatra app:

~~~~~~~~
require 'sinatra'

get '/' do
  'pizza is awesome'
end
~~~~~~~~

Type that code into your app.rb file.

Now you can run your app with this command:

~~~~~~~~
ruby app.rb
~~~~~~~~

Let's go through this app line by line:

**Import the sinatra functionality into our app:**

~~~~~~~~
require 'sinatra'
~~~~~~~~

**Call `get`, to respond to requests for the root url:**

~~~~~~~~
get '/' do
~~~~~~~~

**Respond to requests with some text:**

~~~~~~~~
  'pizza is awesome'
~~~~~~~~

**Close the `get` block:**

~~~~~~~~
end
~~~~~~~~


### Extended example

Let's make a small website with [sinatra](http://sinatrarb.com) to explore how it works.

In this example our site will do three things:  
- serve html at the root route from a view that has a list of posts
- serve html for a single post at `/post/:id`
- serve json at `/api/posts` that has a list of posts

We won't be using a database for this example, but instead will use a json file with a list of posts.

To get started, create and change directory into a new project folder.

```
mkdir sinatra-example
cd sinatra-example
```

We'll be using sinatra and will utilize the default template language, erb. Let's install sinatra by creating a Gemfile:

```
touch Gemfile
```

Add the sinatra gem to the Gemfile:

```
gem 'sinatra'
```

Now run bundle to install sinatra:

```
bundle
```

We will use [shotgun](https://github.com/rtomayko/shotgun "shotgun") to run the app – shotgun will automatically restart the server each time you edit a file in the project.

Install shotgun:

```
gem install shotgun
```

To run the sinatra app you'll use this command:

```
shotgun app.rb
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

Now create the app.rb file:

```
require 'sinatra'
require 'json'

before do
  @title = 'Extended Sinatra example'
  @posts = JSON.parse( IO.read('posts.json') )
end

get '/' do
  erb :index
end

get '/post/:slug' do
  @posts.each do |post| 
    if post['slug'] == params[:slug] 
      @post = post
    end
  end
  erb :post
end

get '/api/posts' do
  data = { 
    meta: { name: @title },
    posts: @posts
  }
  data.to_json
end
```

Let's break down this example code chunk by chunk:

Require the necessary ruby libraries:

```
require 'sinatra'
require 'json'
```


Create global variables that are available to our views using the before method, which runs before a request is processed:

```
before do
  @title = 'Extended Sinatra example'
  @posts = JSON.parse( IO.read('posts.json') )
end
```

Serve the index.erb view on the root url with the following code block. note that an erb view is rendered using the `erb` method, and you don't have to include the .erb file suffix. Sinatra automatically looks in a folder named views, so you only have to pass the file name:

```
get '/' do
  erb :index
end
```

The following code block listens for requests for a specific blog post. We iterate through each of the items in our posts array, and if the slug that's passed in the url matches a slug in the posts array, that post is set to a global `@post` variable that's available in our post view.

```
get '/post/:slug' do
  @posts.each do |post| 
    if post['slug'] == params[:slug] 
      @post = post
    end
  end
  erb :post
end
```

The following is a simple example of exposing a simple json feed of the posts:

```
get '/api/posts' do
  data = { 
    meta: { name: @title },
    posts: @posts
  }
  data.to_json
end
```


Next, we'll need the erb views for rendering html.

Let's make a views folder for all the views to live in:

```
mkdir views
```

And create all the view files that we need:

```
touch views/layout.erb views/index.erb views/post.erb
```

Add this content to the layout.erb file:


```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title><%= @title %></title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>

<header>
  <div class="container">
    <h1><a href="/"><%= @title %></a></h1>
  </div>
</header>

<main role="main">
  <div class="container">
    <%= yield %>
  </main>
</div>

<footer>
  <div class="container">
    <p>Posts are also available via json at <a href="/api/posts">/api/posts</a>/
  </div>
</footer>

</body>
</html>
```

Add this content to the index.erb file:

```
<% for @post in @posts %>
  <h3>
    <a href="/post/<%= @post['slug'] %>">
      <%= @post['title'] %>
    </a>
  </h3>
  <div><%= @post['content'] %></div>
<% end %>
```

Add this content to the post.erb file:

```
<h3><%= @post['title'] %></h3>
<div><%= @post['content'] %></div>
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

You should now be able to navigate the home page, three blog post pages, and the posts json feed. Run the project with the nodemon command:

```
shotgun app.rb
```


### Sinatra resources

Learn more about sinatra at the sinatra website: [http://www.sinatrarb.com](http://www.sinatrarb.com/)

## Resources

http://tryruby.org/
