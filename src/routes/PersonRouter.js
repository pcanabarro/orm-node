const express = require("express");
const personController = require("../controllers/PersonController.js");

const router = express.Router()

router.route("/person")
    .get(personController.getPeople)
    .post(personController.createPerson)

router.route("/person/:id")
    .get(personController.getPerson)
    .put(personController.updatePerson)
    .delete(personController.deletePerson)

module.exports = router    
