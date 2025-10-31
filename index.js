const express = require('express');
const ejs = require('ejs');

const app = express();
const port = 8000;

// Tell Express to use EJS
app.set('view engine', 'ejs');

// Parse POST request body
app.use(express.urlencoded({ extended: true }));

// Load the route handlers
const mainRoutes = require("./routes/main");  
app.use('/', mainRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.static('public'));

