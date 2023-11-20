
const Joi = require('joi');

const captionSchema = Joi.object({
    text: Joi.string()
    .min(5)
    .required(),
    userId: Joi.number()
    .integer()
    .required(),
    imageId: Joi.number()
    .integer()
    .required()
});

module.exports = captionSchema;