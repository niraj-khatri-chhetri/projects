const express = require('express');

const router = express.Router();

const uniController = require('../../controllers/Uni/uni');

const isAuth = require('../../middleware/is-auth');

router.post('/add-uni', isAuth, uniController.addUni);
router.get('/add-uni', uniController.getUni);

module.exports = router;
