const express = require('express');
const TraineeRoute = require('../route/trainee.route');
const UserRoute = require('../route/user.route');
const router = express.Router();

router.use('/trainee', TraineeRoute);
router.use('/user', UserRoute);
module.exports = router;