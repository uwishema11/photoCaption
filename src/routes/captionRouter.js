
const express = require('express');
const captionController = require('../controllers/captionController');
const {checkAuth} = require('../middleware/auth.js')

const router = express.Router();

router.post('/:id',checkAuth,captionController.createCaption);



module.exports = router;