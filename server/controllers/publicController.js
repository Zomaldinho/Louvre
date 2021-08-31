const { validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed.');
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  try {
    const { username, password, role, mobileNumber } = req.body;
    let hashedPass = await bcrypt.hash(password, 12);
    let user = new User({
      username,
      password: hashedPass,
      role,
      mobileNumber,
    });
    let savedUser = await user.save();
    res.status(201).json({ message: 'User created!', user: savedUser });
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
