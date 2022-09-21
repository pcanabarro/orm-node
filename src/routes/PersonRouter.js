const express = require("express");
const personController = require("../controllers/PersonController.js");

const router = express.Router()

router
    .get("/person", personController.getPeople)
    .post("/person", personController.createPerson)
    .get("/person/active", personController.getActivePeople)
    .get("/person/enrollment/full", personController.getFullClasses)
    .get("/person/enrollment/:classId/active", personController.getEnrollmentByClass)
    .get("/person/:id", personController.getPerson)
    .put("/person/:id", personController.updatePerson)
    .delete("/person/:id", personController.deletePerson)
    .post("/person/:id/restore", personController.restorePerson)
    .get("/person/:studentId/enrollment", personController.getEnrollments)
    .post("/person/:studentId/cancel", personController.cancelPerson)
    .post("/person/:studentId/enrollment", personController.createEnrollment)
    .get("/person/:studentId/enrollment/:enrollmentId", personController.getEnrollment)
    .put("/person/:studentId/enrollment/:enrollmentId", personController.updateEnrollment)
    .delete("/person/:studentId/enrollment/:enrollmentId", personController.deleteEnrollment)
    .post("/person/:studentId/enrollment/:enrollmentId/restore", personController.restoreEnrollment)

module.exports = router