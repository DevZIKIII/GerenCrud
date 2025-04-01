const express = require('express');
const ProjectController = require('../controllers/projectController');

const router = express.Router();
const projectController = new ProjectController();

router.post('/', projectController.createProject.bind(projectController));
router.get('/', projectController.getProjects.bind(projectController));
router.put('/:id', projectController.updateProject.bind(projectController));
router.delete('/:id', projectController.deleteProject.bind(projectController));

module.exports = router;