
import captionservice from '../services/captionService';

exports.createCaption = async(req,res) =>{
    try{
        
        if(!req.body){
            return res.status(400).json({msg: "No Caption provided"});
        }
        const createdCaption = await captionservice.addCaption(req.body);
        return res.status(200).json({
            success: true,
            message: 'Caption successfully created',
            result: createdCaption
        })
    }
    catch(error){
        console.log(error)
    }
}
