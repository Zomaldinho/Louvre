const express = require('express');
const { body } = require('express-validator');

const User = require('../models/User');
const publicController = require('../controllers/publicController');

const router = express.Router();

router.post(
  '/user',
  [
    body('username').trim().not().isEmpty(),
    body('password').trim().isLength({ min: 5 }),
    body('role').not().isEmpty().custom((value) => {
      if (value !== "Admin" && value !== "Guest") {
        throw new Error('role value should be Admin or Guest');
      }
      return true;
    }),
    body('mobileNumber').trim().isLength({ min: 5 }),
  ],
  publicController.signup
);

module.exports = router