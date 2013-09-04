# Ruby

Ruby is a pleasant language that gets about as close to the English language as possible.

It's popular in large part because of the web development framework Ruby on Rails.

## Language website
[http://www.ruby-lang.org/en](http://www.ruby-lang.org/en)

## Documentation
docs: [http://www.ruby-lang.org/en/documentation](http://www.ruby-lang.org/en/documentation)

## Vagrant

Let's create a vagrant machine in your ruby DevEnvs folder:

~~~~~~~~
cd ~/DevEnvs/ruby
~~~~~~~~

~~~~~~~~
vagrant init
~~~~~~~~

## Installing ruby
rbenv / ruby-build / rbenv-vars


We'll be using rbenv to install ruby: [https://github.com/sstephenson/rbenv](https://github.com/sstephenson/rbenv).

We'll also need ruby-build.

## Package manager: rubygems

### Use bundler
http://bundler.io/

## Automating repetitive tasks

For automating tasks in ruby development, use [rake](http://rake.rubyforge.org/).

### Install

First, install the rake gem:

~~~~~~~~
gem install rake
~~~~~~~~

Next, you'll create a Rakefile in your project.

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
cd ~/DevEnvs/ruby
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

### Sinatra resources

Learn more about sinatra at the sinatra website: [http://www.sinatrarb.com](http://www.sinatrarb.com/)

## Resources

http://tryruby.org/
