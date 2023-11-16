const express = require('express');
const imageController = require('../controllers/imageController.js');
const {checkAuth} = require('../middleware/auth.js')

const router = express.Router();

router.post('/',checkAuth,imageController.uploadImg,imageController.createImage);

module.exports = router;
