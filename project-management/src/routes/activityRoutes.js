const express = require('express');
const ActivityController = require('../controllers/activityController');

const router = express.Router();
const activityController = new ActivityController();

router.post('/', activityController.createActivity.bind(activityController));
router.get('/', activityController.getActivities.bind(activityController));
router.put('/:id', activityController.updateActivity.bind(activityController));
router.delete('/:id', activityController.deleteActivity.bind(activityController));

module.exports = router;