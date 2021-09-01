const express = require('express');
const cors = require('cors');
const route = require('./routes');
const path = require('path');
const db = require('./configs/db_connection');
const dotenv = require('dotenv');
dotenv.config({path: '../.env'});

const app = express();

// Static files configuration
app.use(express.static(path.join(__dirname, 'public')));

// Database connection
db.connect();

// Parsing body request
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Using cors middleware to allow cross-origin requests
app.use(cors());

// Routing
route(app);

app.listen(process.env.SERVER_PORT, process.env.HOSTNAME, () => {
    console.info(`Server running at http://${process.env.HOSTNAME}:${process.env.SERVER_PORT}`)
});

module.exports = app;