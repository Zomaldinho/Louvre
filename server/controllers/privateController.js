const { validationResult } = require('express-validator');

const Art = require('../models/Art');
const User = require('../models/User');
const validationHelper = require('../helpers/validations');
const authHelper = require('../helpers/auth');

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

exports.createArt = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    // handle validation error
    if (!errors.isEmpty()) {
      validationHelper.handleValidationErrors(errors);
    }
    authHelper.checkUserIsAdmin(req.userRole);
    let { artist, description } = req.body;
    let { path } = req.file;
    let art = new Art({
      artist,
      description,
      picture: path
    })
    let savedArt = await art.save()
    res.status(201).json({
      message: 'Art created successfully!',
      art: savedArt,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.editArt = async (req, res, next) => {
  try {
    // handle validation error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      validationHelper.handleValidationErrors(errors);
    }
    authHelper.checkUserIsAdmin(req.userRole);
    let { artist, description } = req.body;
    let { id } = req.params;
    let editedArt = await Art.findByIdAndUpdate(
      id, { $set: { artist, description } },
      { new: true }
    );
    res.status(200).json({ message: 'Art updated!', art: editedArt });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.deleteArt = async (req, res, next) => {
  try {
    authHelper.checkUserIsAdmin(req.userRole);
    let { id } = req.params
    await Art.findByIdAndRemove(id)
    res.status(200).json({ message: 'Art is deleted' });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }

}

exports.getUsers = async (req, res, next) => {
  try {
    authHelper.checkUserIsAdmin(req.userRole);
    const currentPage = +req.query.page || 1;
    const perPage = +req.query.elements || 10;
    let users = await User.find()
      .skip((currentPage - 1) * perPage)
      .limit(perPage);
    res.status(200).json({
      message: 'Fetched users successfully.',
      users,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
}