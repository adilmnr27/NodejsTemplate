/*------Start of the application--------*/
/*------Write 'npm install' to install all the dependencies-------------*/
/*------Start the application by typing 'node app.js'-------------------*/
/*------You can edit the port number by editing the const variable portNumber------*/

// we will use the require function to load the module
const express = require("express") //express is the name of module which returns a function .
const app = express(); // object created of type Express
const portNumber = 8081;

/* Methods which can be used
app.get();
app.post();
app.put();
app.delete();
*/


/*
*First app.get() has two argument. 
*First argument is a url for the root of the website
*Second argument is a call back function which has two argument 'req' and 'res'.
*So when the root of the url has been hit, the lambda callback function will be called and two paramters will be passed.
*/
app.get('/', (req, res) => {
    res.send("Hello World");
})


//now for listening the endpoints on a given port
/*
* First argument is the port on which you want the app to listen.
* Second argument is an optional parameter.
* The Second argument is a call back function which will be executed after the application starts listening on the desired port.
*/
app.listen(portNumber, () => {
    console.log("Application is running on port " + portNumber)
})