const { body } = require("express-validator")

exports.createArt = () => {
  return [
    body('artist').exists().trim(),
    body('description').exists().trim()
  ]
}

exports.createUser = () => {
  return [
    body('username').trim().not().isEmpty().toLowerCase(),
    body('password').trim().isLength({ min: 5 }),
    body('role')
      .not()
      .isEmpty()
      .custom((value) => {
        if (value !== 'Admin' && value !== 'Guest') {
          throw new Error('role value should be Admin or Guest');
        }
        return true;
      }),
    body('mobileNumber').trim().isLength({ min: 5 }),
  ]
}

exports.login = () => {
  return [
    body('username').trim().not().isEmpty().toLowerCase(),
    body('password').trim().not().isEmpty(),
  ]
}

exports.handleValidationErrors = (errors) => {
  const error = new Error('Validation failed.');
  error.statusCode = 422;
  error.data = errors.array();
  throw error;
};

exports.checkImageFile = (req) => {
  if(!req.file){
    const error = new Error('Image file is required');
    error.statusCode = 401;
    throw error;
  }
}