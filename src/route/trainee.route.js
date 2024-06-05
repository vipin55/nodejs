const express = require("express");
const TraineeController = require("../controller/trainee.controller");
const router = express.Router();

router.get("/", TraineeController.getTrainees);
router.post("/create", TraineeController.createTrainee);
router.delete("/delete/:id", TraineeController.deleteTrainee);
router.put("/update/:id", TraineeController.updateTrainee);
module.exports = router;
