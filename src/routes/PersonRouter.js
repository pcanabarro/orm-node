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
    
router
    .post("/person/:studentId/enrollment", personController.createEnrollment)
    .get("/person/:studentId/enrollment/:enrollmentId", personController.getEnrollment)
    .put("/person/:studentId/enrollment/:enrollmentId", personController.updateEnrollment)
    .delete("/person/:studentId/enrollment/:enrollmentId", personController.deleteEnrollment)

module.exports = router    
