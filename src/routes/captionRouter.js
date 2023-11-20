
const express = require('express');
const captionController = require('../controllers/captionController');
const {checkAuth} = require('../middleware/auth.js')

const router = express.Router();

router.post('/:id',checkAuth,captionController.createCaption);
router.patch('/:imageId/:id',checkAuth,captionController.updateCaption);
router.get('/',checkAuth,captionController.findAllCaptions);
router.delete('/:id',checkAuth,captionController.deleteCaption);



module.exports = router;