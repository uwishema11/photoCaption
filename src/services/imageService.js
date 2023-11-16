
// // import { Image } from '../database/models'


// // const addImage = async(image)=>{
// //     const newImage = await Image.create(image)
// //     return newImage
// // };

// // const deleteImage = async(id)=>{
// //     return await models.Image.destroy({
// //         where: id
// //     });
// // };

// // const findAllImages = async()=>{
// //     const allImages = await models.Image.findAll({
// //         include: [{
// //             model: UserActivation,
// //             as:users
// //         }]
// //     })
// //     return allImages
// // };

// // const findImageById = async(id)=>{
// //     const image = await models.Image.findOne({
// //         where: id
// //     })
// //     return image
// // }

// // const updateImage =async(id,image)=>{
// //     return await models.Image.update(image,{
// //         wherre: {id},
// //         returning: true,
// //         row:true
// //     })
// // };

// // export{
// //     addImage,
// //     deleteImage,
// //     findImageById,
// //     findAllImages,
// //     updateImage
// // }

const models = require('../database/models');

const addImage = async (image) => {
    const newImage = await models.Image.create(image);
    return newImage;
};

const deleteImage = async (id) => {
    return await models.Image.destroy({
        where: id
    });
};

const findAllImages = async () => {
    const allImages = await models.Image.findAll({
        include: [{
            model: models.UserActivation,
            as: 'users'
        }]
    });
    return allImages;
};

const findImageById = async (id) => {
    const image = await models.Image.findOne({
        where: id
    });
    return image;
};

const updateImage = async (id, image) => {
    return await models.Image.update(image, {
        where: { id },
        returning: true,
        row: true
    });
};

module.exports = {
    addImage,
    deleteImage,
    findImageById,
    findAllImages,
    updateImage
};

