# crescendo-eval
Code evaluation for Crescendo Collective


# Set up your environment

Run these commands from within the project folder (crescendo-eval).


## 1. Create a server

`docker run --name crescendo-lamp -p 5050:80 -dti -v ${PWD}:/var/www/html jschnor/lamp`

If you want to ssh into the container, use `docker exec -ti crescendo-lamp bash`


## 2. Visit the site in your browser

Just go to [http://localhost:5050/](http://localhost:5050/).


## 3. Install dependencies

From the command line, run `npm install`.


# Build and develop

From the command line, run `gulp`. The browser will automatically reload when you save your changes. See gulpfile.js for other command line options.


# Deployment

Before deploying, run `gulp --production` from the command line. This will minify javascript and set up the html files to use the minified script, as well as a bunch of other final tasks.

The `/dist` folder contains all necessary assets and the index page. You should be able to deploy the contents of this folder and nothing else.