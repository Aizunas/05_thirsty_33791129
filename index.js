// Setup express and ejs
const express = require('express');
const ejs = require('ejs');

// Create the express application object
const app = express();

// Set up the body parser for POST requests
app.use(express.urlencoded({ extended: true }));

// Tell Express that we want to use EJS as the templating engine
app.set('view engine', 'ejs');

// Load the route handlers
const mainRoutes = require('./routes/main');
app.use('/', mainRoutes);

// Use the port provided by the VM or default to 8000
const port = process.env.PORT || 8000;

// Start the web app listening
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
