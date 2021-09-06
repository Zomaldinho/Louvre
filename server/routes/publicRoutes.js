const express = require('express');
const { body } = require('express-validator');

const publicController = require('../controllers/publicController');
const validationHelper = require('../helpers/validations')

const router = express.Router();

router.post('/user', validationHelper.createUser(), publicController.signup);
router.post('/login', validationHelper.login(), publicController.login);

module.exports = router;
