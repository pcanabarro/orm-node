const express = require("express");
const enrollmentController = require("../controllers/EnrollmentController.js")

const router = express.Router()

router.route("/enrollment")
    .get(enrollmentController.getEnrollments)
    .post(enrollmentController.createEnrollment)
    
router.route("/enrollment/:id")
    .get(enrollmentController.getEnrollment)
    .put(enrollmentController.updateEnrollment)
    .delete(enrollmentController.deleteEnrollment)

module.exports = router