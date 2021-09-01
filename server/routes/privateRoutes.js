const express = require('express');

const isAuth = require('../middlewares/isAuth');
const privateController = require('../controllers/privateController');
const uploadHelper = require('../helpers/uploadImage');

const router = express.Router();
const multer = require('multer');

let upload = multer({
  storage: uploadHelper.storage,
  fileFilter: uploadHelper.fileFilter,
}).single('image');

router.post('/getArts', isAuth, privateController.getArts);
router.post('/createArt', isAuth, upload, privateController.getArts);

module.exports = router;
