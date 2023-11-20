const express = require('express');
const imageController = require('../controllers/imageController.js');
const {checkAuth} = require('../middleware/auth.js')

const router = express.Router();

router.post('/',checkAuth,imageController.uploadImg,imageController.createImage);

router.patch('/:id',checkAuth,imageController.uploadImg,imageController.updateImage);
router.get('/:id',checkAuth,imageController.findSingle);
router.get('/',checkAuth,imageController.findAllImages);

router.delete('/:id',checkAuth,imageController.deleteImage);

module.exports = router;
