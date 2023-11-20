
const Joi = require('joi');

 const imageSchema = Joi.object({
    url: Joi.string()
    .required(),
    description: Joi.string(),
    userId: Joi.number()
    .required()
});

module.exports = imageSchema;