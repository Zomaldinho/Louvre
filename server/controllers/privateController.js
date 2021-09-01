const { validationResult } = require('express-validator');

const Art = require('../models/Art');

exports.getArts = async (req, res, next) => {
  const currentPage = req.body.page || 1;
  const perPage = req.body.elements || 10;
  try {
    let arts = await Art.find()
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    res.status(200).json({
      message: 'Fetched arts successfully.',
      arts,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
