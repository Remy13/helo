require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();


app.use(express.json());

let {SERVER_PORT, CONNECTION_STRING } = process.env;

massive({connectionString:CONNECTION_STRING ,ssl: {rejectUnauthorized: false}}).then(db => {
    app.set("db", db);
    console.log("connected to db")
    }
);

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`);
});