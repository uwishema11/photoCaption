
import models from '../database/models'

const addCaption = async(createdCaption)=>{
    
    const caption= await models.Caption.create(createdCaption);
    return caption
};

const findAllCaption =async()=>{
    const allCaptions = await models.Caption.findAll({
        include: [{
            models: User,
            as:users
        }]
    });
    return allCaptions;
};

const findCaptionById = async (id) =>{
    const caption = await models.Caption.findOne({
        where: id
    });
    return caption;
} ;

const updateCaption = async(id,captionInfo) =>{
    return await models.Caption.update(captionInfo, {
        where: id,
        returning: true,
        raw: true
    });
};

const deleteCaption = async(id) =>{
    return await models.Caption.destroy({
        where: id
    });
};

export {
    addCaption,
    findAllCaption,
    findCaptionById,
    deleteCaption,
    updateCaption,
}