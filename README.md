# Official website for [performancegymaarhus.dk](http://performancegymaarhus.dk)

## Hosting

The site is hosted on [netlify.com](http://netlify.com)

## Development

Clone the project and then go to the directory. Then do

    vagrant up

Access the box by

    vagrant ssh

Go to the symlinked directory `/var/www`.

    jekyll server --watch -P 8124 --host=0.0.0.0

Now you can access your site from the host machine at `http://localhost:8124`. All changes should be applied automatically.
