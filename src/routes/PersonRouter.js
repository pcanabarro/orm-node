const express = require("express");
const personController = require("../controllers/PersonController.js");

const router = express.Router()

router.route("/person")
    .get(personController.getActivePeople)
    .post(personController.createPerson)

router
    .get("/person/all", personController.getPeople)

router.route("/person/:id")
    .get(personController.getPerson)
    .put(personController.updatePerson)
    .delete(personController.deletePerson)
    
router
    .post("/person/:id/restore", personController.restorePerson)
    .post("/person/:studentId/enrollment", personController.createEnrollment)
    .get("/person/:studentId/enrollment/:enrollmentId", personController.getEnrollment)
    .put("/person/:studentId/enrollment/:enrollmentId", personController.updateEnrollment)
    .delete("/person/:studentId/enrollment/:enrollmentId", personController.deleteEnrollment)
    .post("/person/:studentId/enrollment/:enrollmentId/restore", personController.restoreEnrollment)

module.exports = router