const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed.');
      error.statusCode = 422;
      error.data = errors.array();
      throw error;
    }
    const { username, password, role, mobileNumber } = req.body;
    let hashedPass = await bcrypt.hash(password, 12);
    let user = new User({
      username,
      password: hashedPass,
      role,
      mobileNumber,
    });
    let savedUser = await user.save();
    delete savedUser.password;
    res
      .status(201)
      .json({
        message: 'User created!',
        user: {
          username: savedUser.username,
          mobileNumber: savedUser.mobileNumber,
          role: savedUser.role,
        },
      });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
