# Ruby

Ruby is a pleasant language that gets about as close to the English language as possible.

It's popular in large part because of the web development framework Ruby on Rails.

## Language website
http://www.ruby-lang.org/en/

## Documentation
docs: http://www.ruby-lang.org/en/documentation/

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
https://github.com/sstephenson/rbenv

## Package manager: rubygems

### Use bundler
http://bundler.io/

## Testing: minitest
https://github.com/seattlerb/minitest

## Language basics

## Web framework: sinatra
http://www.sinatrarb.com/

### Simple example

Let's write a simple hello sinatra example app:

~~~~~~~~
require 'sinatra'

get '/' do
  'pizza is awesome'
end
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

## Resources

http://tryruby.org/
