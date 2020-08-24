require('dotenv').config();
const ctrl = require("./controller");
const express = require('express');
const massive = require('massive');
const bcrypt = require("bcryptjs")
const app = express();



app.use(express.json());

let {SERVER_PORT, CONNECTION_STRING } = process.env;

massive({connectionString:CONNECTION_STRING ,ssl: {rejectUnauthorized: false}}).then(db => {
    app.set("db", db);
    console.log("connected to db")

    app.get ( "/login", ctrl.getUser )
    app.post ("/register", ctrl.registerUser )
}
);

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`);
});

