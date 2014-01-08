# Vagrant: install an operating system inside of your operating system!

Vagrant is a tool for running "virtual machines" on a computer. Let's say your computer is a Mac. With vagrant, you can run a virtual machine with a different operating system on your computer. 

It's almost like dual booting, like having both Windows and Linux installed on a computer, except you have a lot more control over a virtual machine. You can spin one up temporarily to work on a project, and when you're done, destroy the virtual machine.

Vagrant makes this process easy. It relies on virtual machine software – there are a number of options, but we'll use software called virtualbox.

In a way, vagrant is a wrapper around virtualbox – making it easy to create, run, and destroy virtual machines that run from the command line.

The primary operating system on your computer is called the "host" operating system. Any virtual machines you create are called "guest" operating systems.

We'll use the term **box** to describe the virtual machines that we create using vagrant.

## Reasons for using vagrant:
- Keep your host OS clean by installing dependencies for your project in a virtual machine rather than having everything installed on your host OS
- Have the same operating system and same dependencies set up in your virtual machine as you have on the production server, making it easier to deploy your application because there's little difference between the two environments.
- The people on your team can use vagrant so that all of your development environments match, easing issues with some people having issues with developing on a particular operating system.

## Vagrantfiles

Vagrant uses a file named `Vagrantfile` in your project directory as a config file for your vagrant box.

There are many config options you can set. To learn more check out the Vagrantfile section of the vagrant documentation: [http://docs.vagrantup.com/v2/vagrantfile/index.html](http://docs.vagrantup.com/v2/vagrantfile/index.html).

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

[http://www.vagrantup.com/downloads.html](http://www.vagrantup.com/downloads.html)

**installation instructions:**

[http://docs-v1.vagrantup.com/v1/docs/getting-started/index.html#install_vagrant](http://docs-v1.vagrantup.com/v1/docs/getting-started/index.html#install_vagrant)

#### Documentation
docs: [http://docs-v1.vagrantup.com/v1/docs/index.html](http://docs-v1.vagrantup.com/v1/docs/index.html)

## Set up your first vagrant machine

Let's get started with the basics of using vagrant.

Open the terminal on your computer and run this command:

~~~~~~~~
vagrant
~~~~~~~~

Running the command by itself will show you all the possible sub-commands and options you can pass.

Let's try this thing out.

Create and navigate to your DevEnvs folder:

~~~~~~~~
mkdir ~/DevEnvs
cd ~/DevEnvs
~~~~~~~~

Create a folder named `tmp` and change directory into it:

~~~~~~~~
mkdir tmp && cd tmp
~~~~~~~~

Run `vagrant init` to create a Vagrantfile in our tmp directory:

~~~~~~~~
vagrant init precise32 http://files.vagrantup.com/precise32.box
~~~~~~~~

By passing the name `precise32` and the url of the box we want to use, we prepopulate the Vagrantfile with the vagrant box we intend to use for our project. And by passing a url we're letting vagrant know that we want to download the vagrant box, as it isn't on our computer yet. 

precise32 is the name for Ubuntu 12.04 LTS 32-bit.

You should see output on the terminal like this:

~~~~~~~~
A `Vagrantfile` has been placed in this directory. You are now
ready to `vagrant up` your first virtual environment! Please read
the comments in the Vagrantfile as well as documentation on
`vagrantup.com` for more information on using Vagrant.
~~~~~~~~

Now, run `vagrant up` to boot your vagrant box:

~~~~~~~~
vagrant up
~~~~~~~~

This does a couple things: because we passed a url to vagrant init, and we  don't already have a box on our machine named precise32, `vagrant up` will first download the precise32 box, then boot it with any configuration that's been set in the Vagrantfile.

You should see output on the terminal like this:

~~~~~~~~
Bringing machine 'default' up with 'virtualbox' provider...
[default] Box 'precise32' was not found. Fetching box from specified URL for
the provider 'virtualbox'. Note that if the URL does not have
a box for this provider, you should interrupt Vagrant now and add
the box yourself. Otherwise Vagrant will attempt to download the
full box prior to discovering this error.
Downloading or copying the box...
Extracting box...te: 1727k/s, Estimated time remaining: 0:00:01)
Successfully added box 'precise32' with provider 'virtualbox'!
[default] Importing base box 'precise32'...
[default] Matching MAC address for NAT networking...
[default] Setting the name of the VM...
[default] Clearing any previously set forwarded ports...
[default] Fixed port collision for 22 => 2222. Now on port 2201.
[default] Creating shared folders metadata...
[default] Clearing any previously set network interfaces...
[default] Preparing network interfaces based on configuration...
[default] Forwarding ports...
[default] -- 22 => 2201 (adapter 1)
[default] Booting VM...
[default] Waiting for VM to boot. This can take a few minutes.
[default] VM booted and ready for use!
[default] Configuring and enabling network interfaces...
[default] Mounting shared folders...
[default] -- /vagrant
~~~~~~~~

Now that the box is up and running, we can ssh into this instance of Ubuntu that we just set up!

We do that by running `vagrant ssh` in the terminal:

~~~~~~~~
vagrant ssh
~~~~~~~~

You should see output on the terminal like this:

~~~~~~~~
Welcome to Ubuntu 12.04 LTS (GNU/Linux 3.2.0-23-generic-pae i686)

 * Documentation:  https://help.ubuntu.com/
Welcome to your Vagrant-built virtual machine.
Last login: Fri Sep 14 06:22:31 2012 from 10.0.2.2
~~~~~~~~

You have now entered your vagrant box. Every command you type in your terminal now happens in this instance of Ubuntu Linux.

To exit from the vagrant box, and take the terminal back to your host operating system, run the `exit` command:

~~~~~~~~
exit
~~~~~~~~

You prompt should now look the same as before you ran `vagrant ssh`.

Now that we downloaded that precise32 box once, we won't have to do it again. We'll be able to use it for each new project we start.

Next time we're about to create a vagrant box we'll navigate to the project folder and run 'vagrant init' again, like this:

~~~~~~~~
vagrant init precise32
~~~~~~~~

We don't have to pass in the url, because we've already downloaded the box.

When we run `vagrant up`, the box won't be downloaded, because we've already got a copy of it sitting on our computer. This speeds things up.

To see which boxes you've currently got downloaded run this command:

~~~~~~~~
vagrant box list
~~~~~~~~

Let's stop this vagrant instance we created in our ~/DevEnvs/tmp folder.

Run this command:

~~~~~~~~
vagrant halt
~~~~~~~~

We can start the box back up again any time by running `vagrant up` from inside this folder.

Let's now destroy the vagrant instance.

To learn about this use the following command:

~~~~~~~~
vagrant destroy --help
~~~~~~~~

You'll see output like this:

~~~~~~~~
Usage: vagrant destroy [vm-name]

    -f, --force                      Destroy without confirmation.
    -h, --help                       Print this help
~~~~~~~~


## Alternatives to vagrant/virtualbox

**docker**

Docker is a cool new approach that uses lightweight containers for encapsulating applications. Definitely worth checking out: [http://www.docker.io](http://www.docker.io/).

Go through their getting started tutorial to get a sense of how it works: [http://www.docker.io/gettingstarted](http://www.docker.io/gettingstarted/).

It's also possible to use docker on one of your vagrant machines, which seems like an awesome option. If you're feeling adventurous, check out docker's documentation for integrating with vagrant and virtualbox: [http://docs.docker.io/en/latest/installation/vagrant/](http://docs.docker.io/en/latest/installation/vagrant/).

**nitrous.io**

You can have a development environment that you access through the web using nitrous.io: [https://www.nitrous.io](https://www.nitrous.io/).

This is great if you're on a machine that runs an operating system like ChromeOS, or it's something you can't install software on for whatever reason.

You can set up one box on nitrous.io for free, and beyond that it costs money.
