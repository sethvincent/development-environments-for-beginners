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

## Testing: minitest
https://github.com/seattlerb/minitest

## Language basics

## Web framework: sinatra
http://www.sinatrarb.com/

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
