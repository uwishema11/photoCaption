const express = require('express');
const imageController = require('../controllers/imageController.js');
const userController = require('../controllers/userController.js')

const router = express.Router();

router.post('/',userController.login,imageController.uploadImg,imageController.createImage);

module.exports = router;
