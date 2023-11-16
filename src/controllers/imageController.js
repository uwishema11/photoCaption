
const cloudinary = require('../config/config.js');
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require('multer');
const imageService = require('../services/imageService.js');



const storage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"DEV"
    },
});

exports.uploadImg = multer({storage: storage}).single('url');

exports.createImage = async (req, res) => {
  try {
    
    const picture = req.file;
    
    if (!picture) {
      return res.status(400).json({
        success: false,
        error: 'No file uploades',
      });
    }
 

    req.body = {
      ...req.body,
      url: req.file.path,
      userId:req.user.id
    }

    const createdPhoto = await imageService.addImage(req.body);
    return res.status(200).json({
      status: 201,
      message: 'Image added successfully',
      result: createdPhoto,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


