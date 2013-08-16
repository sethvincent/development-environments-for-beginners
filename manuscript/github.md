# GitHub.com: a social network for git users

GitHub is a great place to host your code. Many employers hiring for developer and designer positions will ask for a GitHub profile, and they'll use your GitHub activity as part of the criteria in their decision-making process.

In fact, if you're looking to get a job with a particular company, try to find _their_ GitHub profile and start contributing to their open source projects. This will help you stand out, and they'll already know your technical abilities based on your open source contributions. That's a big win.

GitHub has become the de facto code hosting service for most open source communities.

## Website
http://github.com

## Create an account
If you haven't already, create an account at [github.com](http://github.com).

## Create your first repository

## GitHub Pages

GitHub Pages is a web hosting service offered by GitHub typically used for hosting websites for open source projects that have code hosted on GitHub. In practice, people use it for all kinds of sites. The only limitation is that it is strictly for static sites composed from html, css, and javascript.

Learn more about GitHub Pages: [http://pages.github.com](http://pages.github.com)

### With GitHub Pages you can:
- design a website any way you want by having complete control over the html, css, and javascript.
- use simple templates for getting started using GitHub Pages.
- create sites for yourself and all of your projects hosted on GitHub.
- use a custom domain name if you want!



Visit the [help section for GitHub Pages](https://help.github.com/categories/20/articles) to learn more details about hosting sites on GitHub.

### Host a site for free

GitHub has a useful service called [GitHub Pages](http://pages.github.com) that allows you to host a simple site on their servers for free.

To get started, fork this simple template: [github.com/maxogden/gh-pages-template](https://github.com/maxogden/gh-pages-template).

Visit that github project, make sure you're logged in, and click Fork in the upper right side of the screen.

Fork gh-pages-template to your personal account.

Rename the repository from gh-pages-template to whatever you want by clicking on Settings on the right side of your fork of the repository, and changing the name there. GitHub will warn

That's it! You now have a website hosted through GitHub Pages.

You'll be able to visit your site at __YOUR-USERNAME__.github.com/__YOUR-PROJECT-NAME__.

You'll want to edit the content though, right? Add your cat pictures or resume or pizza recipes? You can do that.

You can create, edit, move, rename, and delete files all through the GitHub website. Check out these blog posts on GitHub for details on how to do those things:
- [Create files](https://github.com/blog/1327-creating-files-on-github)
- [Edit files](https://github.com/blog/143-inline-file-editing)
- [Move and rename files](https://github.com/blog/1436-moving-and-renaming-files-on-github)
- [Delete files](https://github.com/blog/1545-deleting-files-on-github)

You can also clone the project repository onto your computer:

~~~~~~~~
git clone git@github.com:__YOUR-USERNAME__/__YOUR-PROJECT-NAME__.git
~~~~~~~~

You can copy the git url to clone from the right-hand sidebar of your project repository.

After cloning the repository, `cd` into it and make some changes:

~~~~~~~~
cd __YOUR-PROJECT-NAME__
nano index.html
~~~~~~~~

Add a bunch of content to index.html, and change the styles in style.css.

After you've made some changes, add them to the repo and commit the changes:

~~~~~~~~
git add .
git commit -m 'include a brief, clear message about the changes'
~~~~~~~~

Now, push your changes back to GitHub:

~~~~~~~~
git push origin gh-pages
~~~~~~~~
