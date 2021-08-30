const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const route = require('./routes');
const db = require('./configs/db_connection');

const app = express();
dotenv.config({path: '../.env'});

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