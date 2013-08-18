# Vagrant: install an operating system inside of your operating system!

Vagrant is a tool for running "virtual machines" on a computer. Let's say your computer is a Mac. With vagrant, you can run a virtual machine with a different operating system on your computer. 

It's almost like dual booting, like having both Windows and Linux installed on a computer, except you have a lot more control over a virtual machine. You can spin one up temporarily to work on a project, and when you're done, destroy the virtual machine.

Vagrant makes this process easy. It relies on virtual machine software – there are a number of options, but we'll use software called virtualbox.

In a way, vagrant is a wrapper around virtualbox – making it easy to create, run, and destroy virtual machines that run from the command line.

The primary operating system on your computer is called the "host" operating system. Any virtual machines you create are called "guest" operating systems.

## Reasons for using vagrant:
- Keep your host OS clean by installing dependencies for your project in a virtual machine rather than having everything installed on your host OS
- Have the same operating system and same dependencies set up in your virtual machine as you have on the production server, making it easier to deploy your application because there's little difference between the two environments.
- The people on your team can use vagrant so that all of your development environments match, easing issues with some people having issues with developing on a particular operating system.

## Website
http://www.vagrantup.com/

## Install

### Virtualbox:

First we install [virtualbox](https://www.virtualbox.org/).

Go to the virtualbox downloads folder: [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads).

Click the link for your operating system to download the virtualbox installer. Once it's finished downloading, run the installer.

If needed, you can follow the **virtualbox installation instructions:** [http://www.virtualbox.org/manual/ch02.html](http://www.virtualbox.org/manual/ch02.html)

#### Documentation

You probably don't need to, but if you want to dig into virtualbox in depth, check out the documentation: [https://www.virtualbox.org/wiki/Documentation](https://www.virtualbox.org/wiki/Documentation).



### Vagrant

Installing vagrant is pretty easy. Just grab the downloader for your operating system from the vagrant downloads page:

**download vagrant:**

[http://downloads.vagrantup.com](http://downloads.vagrantup.com)

You'll see a list of version numbers on that first page – just click the very top one to get the latest release of vagrant.

**installation instructions:**

[http://docs-v1.vagrantup.com/v1/docs/getting-started/index.html#install_vagrant](http://docs-v1.vagrantup.com/v1/docs/getting-started/index.html#install_vagrant)

#### Documentation
docs: [http://docs-v1.vagrantup.com/v1/docs/index.html](http://docs-v1.vagrantup.com/v1/docs/index.html)

## Set up your first vagrant machine

Here's the basics of using vagrant:

Open the terminal on your computer and run this command:

~~~~~~~~
vagrant
~~~~~~~~

Let's try this thing out.

Navigate to your DevEnvs folder:

~~~~~~~~
cd ~/DevEnvs
~~~~~~~~

Create a folder named `tmp` and change directory into it:

~~~~~~~~
mkdir tmp && cd tmp
~~~~~~~~


Running the command by itself will show you all the possible sub-commands and options you can pass.

## Alternatives to vagrant/virtualbox

**docker**

Docker is a cool new approach that uses lightweight containers for encapsulating applications. Definitely worth checking out: [http://www.docker.io](http://www.docker.io/).

Go through their getting started tutorial to get a sense of how it works: [http://www.docker.io/gettingstarted](http://www.docker.io/gettingstarted/).

It's also possible to use docker on one of your vagrant machines, which seems like an awesome option. If you're feeling adventurous, check out docker's documentation for integrating with vagrant and virtualbox: [http://docs.docker.io/en/latest/installation/vagrant/](http://docs.docker.io/en/latest/installation/vagrant/).

**nitrous.io**

You can have a development environment that you access through the web using nitrous.io: [https://www.nitrous.io](https://www.nitrous.io/).

This is great if you're on a machine that runs an operating system like ChromeOS, or it's something you can't install software on for whatever reason.

You can set up one "box" for free, and beyond that it costs money.