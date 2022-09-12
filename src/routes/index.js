const express = require("express");
const bodyParser = require("body-parser");
const person = require("./PersonRouter.js")

const routes = (app) => {
    app.use(
        bodyParser.json(),
        person
    )
}

module.exports = routes