const express = require("express");
const classController = require("../controllers/ClassController.js")

const router = express.Router()

router.route("/class")
    .get(classController.getClasses)
    .post(classController.createClass)

router.route("/class/:id")
    .get(classController.getClass)
    .put(classController.updateClass)
    .delete(classController.deleteClass)
    
router
    .post("/class/:id/restore", classController.restoreClass)

module.exports = router