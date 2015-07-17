# Datatables Ajax

This project shows a grid with datatables getting data from a json file. 

### Prerequisites

 - Bower - http://http://bower.io/
 - Grunt - http://gruntjs.com/

### Bower
External javascript libraries are handled with *bower*. To install all *bower* dependencies for this project, run the following statement in root directory:

	bower install

If you want to install another library, run the following statement (replacing library-name):

	bower install library-name --save

### Grunt
To install *Grunt* packages, execute the following statement:

	npm install

If you want to install another package, run the following statement (replacing package-name):

	npm install package-name --save-dev 


There are two statements to run *grunt*:

* grunt deploy:
Compile stylesheets, minify and concatenate javascript files and copy all assets into `public` folder
* grunt:
It runs `deploy` (previous task) and execute `connect` and `watch`. 
`connect` runs a web server in 9009 port and `watch` allows to deploy the application everytime a file is updated.
Open http://localhost:9009 in your browser to view the application.