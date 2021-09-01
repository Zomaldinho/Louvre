const express = require('express');

const isAuth = require('../middlewares/isAuth')
const privateController = require('../controllers/privateController');

const router = express.Router();

router.post('/getArts', isAuth, privateController.getArts)

module.exports = router