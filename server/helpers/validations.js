const { body } = require("express-validator")

exports.createArt = () => {
  return [
    body('artist').exists().trim(),
    body('description').exists().trim()
  ]
}

exports.handleValidationErrors = (errors) => {
  const error = new Error('Validation failed.');
  error.statusCode = 422;
  error.data = errors.array();
  throw error;
};