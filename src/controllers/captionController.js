
const captionservice = require( '../services/captionService');
const captionSchema = require('../validations/captionValidation');
const imageService = require('../services/imageService')

exports.createCaption = async(req,res) =>{
    try{

        const body ={
            ...req.body,
            userId:req.user.id,
            imageId: req.params.id
        };
        const {error} = captionSchema.validate(req.body)
        if(error){
            return res.status(400).json({
                success: false,
                message:error.details[0].message
            })
        }

        const newCaption= await captionservice.addCaption(body);
        
        return res.status(200).json({
            success: true,
            message: 'Caption successfully created',
            result: newCaption
        })
    }
    catch(error){
         if (error instanceof Sequelize.ForeignKeyConstraintError) {
            // Handle foreign key constraint error
            return res.status(400).json({ error: 'Invalid imageId provided' });
        }
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

//deleting a caption
exports.deleteCaption = async(req,res) =>{
    try{
        
        await captionservice.deleteCaption(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Caption deleted successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

//Getting all captions 

exports.findAllCaptions = async (req,res) =>{
    try{
        const results = await captionservice.findAllCaption();
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
}

// updating a caption
exports.updateCaption = async(req,res)=>{
    try{
        const imageId= req.params.imageId
        const image= await imageService.findImageById(imageId);
        //check wether image still exists in our database
        if(!image){
            return res.status(400).json({
                success: false,
                message: "An Image not found"
            })
        }

        const caption = await captionservice.findCaptionById(req.params.id);

        // check wether the caption to be updated exists
        if(!caption){
            return res.status(400).json({
                success: false,
                message: "this caption is not found"
            })
        }
        await captionservice.updateCaption(req.params.id,req.body)
        return res.status(200).json({

            success: true,
            message: 'Caption updated successfully'
        })

    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

