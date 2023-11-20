
const models = require('../database/models');

const addImage = async (image) => {
    const newImage = await models.Image.create(image);
    return newImage;
};

const deleteImage = async (id) => {
    return await models.Image.destroy({
        where: {id}
    });
};

const findAllImages = async () => {
    const allImages = await models.Image.findAll();
    return allImages;
};

const findImageById = async (id) => {
    const image = await models.Image.findOne({
        where: {id},
        include: [{
            model: models.User,
            attributes: ['firstName'],
            as: 'users'
        }],
        // include: [{
        //     model: models.Caption,
        //     as: 'captions'
        // }],
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    });
    return image;
};

const updateImage = async (id, data) => {
    return await models.Image.update(data, {
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

