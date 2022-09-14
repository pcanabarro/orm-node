const express = require("express");
const levelController = require("../controllers/LevelController.js")

const router = express.Router()

router.route("/level")
    .get(levelController.getLevels)
    .post(levelController.createLevel)
    
router.route("/level/:id")
    .get(levelController.getLevel)
    .put(levelController.updateLevel)
    .delete(levelController.deleteLevel)

module.exports = router