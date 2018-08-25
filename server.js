var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var PORT = process.env.PORT || 8080;
var app = express();

// Serve static content for the app from the "public" directory
app.use(express.static(path.join(__dirname, "/public")));


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
var routes = require("./controllers/burgersController.js");

app.use(routes);


// Start the server
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

