const express = require('express');
const { body } = require('express-validator');

const isAuth = require('../middlewares/isAuth');
const privateController = require('../controllers/privateController');
const uploadHelper = require('../helpers/uploadImage');
const validationHelper = require('../helpers/validations');

const router = express.Router();
const multer = require('multer');

let upload = multer({
  storage: uploadHelper.storage,
  fileFilter: uploadHelper.fileFilter,
}).single('image');

router.get('/getArts', isAuth, privateController.getArts);
router.delete('/deleteArt/:id', isAuth, privateController.deleteArt)
router.get('/getUsers', isAuth, privateController.getUsers)
router.post(
  '/createArt',
  isAuth,
  upload,
  validationHelper.createArt(),
  privateController.createArt
);
router.put(
  '/editArt/:id',
  isAuth,
  upload,
  validationHelper.createArt(),
  privateController.editArt
);

module.exports = router;
