const express = require("express");
const personController = require("../controllers/PersonController.js");

const router = express.Router()

router.route("/person")
    .get(personController.getPeople)

module.exports = router    
