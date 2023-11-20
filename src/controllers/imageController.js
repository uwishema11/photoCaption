
const cloudinary = require('../config/config.js');
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require('multer');
const imageService = require('../services/imageService.js');
const imageSchema = require('../validations/imageValidation.js')



const storage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"DEV"
    },
});

exports.uploadImg = multer({storage: storage}).single('url');

exports.createImage = async (req, res) => {
  try {
    const picture =req.file;
    if(! picture){
      return res.status(400).json({
        success: false,
        message: 'Upload a valid image'
      })
    }

    req.body = {
      ...req.body,
      url: req.file.path,
      userId:req.user.id
    };

    const {error} = imageSchema.validate(req.body)
    if(error){
      return res.status(400).json({
        message: error.details[0].message
      })
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

//deleting an image

exports.deleteImage = async(req,res) =>{
    try{
        
        await imageService.deleteImage(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Image deleted successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

//Getting all images


exports.findAllImages = async (req,res) =>{
    try{
        const results = await imageService.findAllImages();
        return res.status(200).json({
            success: true,
            data: results
        })

    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
};


exports.findSingle = async (req,res) =>{
    try{
        const results = await imageService.findImageById(req.params.id);
        return res.status(200).json({
            success: true,
            data: results
        })

    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

//updating an image

exports.updateImage = async(req,res)=>{
    try{
      const imageId = req.params.id;
    
      if(!imageId){
        return res.status(400).json({
          success: false,
          message: "Choose an image to update"
        })
      };

      //check whether the image exists in our databse

      const image= await imageService.findImageById(imageId);

      if(!image) {

        return res.status(400).json({
          success: false,
          message: " An image does not exists"
        })
      };
      // checking whether there is an file to update

      if(req.file){
        req.body ={
          ...req.body,
          url:req.file.path
        }

      }
        await imageService.updateImage(imageId,req.body)
        return res.status(200).json({
            success: true,
            message: 'Image updated  successfully'
        })

    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

