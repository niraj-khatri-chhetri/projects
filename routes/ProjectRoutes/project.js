const express = require('express');

const router = express.Router();

const projectController = require('../../controllers/Project/project');

router.get('/create-project', projectController.getProjectForm);

router.post('/createproject', projectController.createProject);

module.exports = router;
