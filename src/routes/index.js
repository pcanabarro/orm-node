const express = require("express");
const bodyParser = require("body-parser");
const person = require("./PersonRouter.js")
const classes = require("./ClassRouter.js")
const level = require("./LevelRouter.js");
// const enrollment = require("./EnrollmentRouter.js");

const routes = (app) => {
    app.use(
        bodyParser.json(),
        person,
        classes,
        level
        // enrollment
    )
}

module.exports = routes