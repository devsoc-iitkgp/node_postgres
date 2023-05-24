// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');

// Importing products.json file
const products = require('./products.json');

// Create an instance of Express
const app = express();
const port = 3000;

// Configure middleware
app.use(bodyParser.json());

// Define GET endpoint at base URL '/'
app.get('/', (req, res) => {
    res.send("Got a GET request at '/'");
});

// Define POST endpoint at base URL '/'
app.post('/', (req, res) => {
    res.send("Got a POST request at '/'");
});

// Define POST endpoint at '/user'
app.post('/user', (req, res) => {
    console.log(req.body);
    res.send("Received");
    const user = req.body;
});

// Define GET endpoint at '/products'
app.get('/products', (req, res) => {
    res.send(products);
});

// Start the server
app.listen(port, () => {
    console.log("Listening on PORT 3000");
});
