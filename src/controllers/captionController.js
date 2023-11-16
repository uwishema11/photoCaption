
const captionservice = require( '../services/captionService');

exports.createCaption = async(req,res) =>{
    try{
        const {text} =req.body
        
        if(!text){
            return res.status(400).json({msg: "No Caption provided"});
        }

        const body ={
            ...req.body,
            userId:req.user.id,
            imageId: req.params.id
        };
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
}
