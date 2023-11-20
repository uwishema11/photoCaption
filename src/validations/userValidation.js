
const Joi = require('joi');

const userSchema = Joi.object({

    firstName: Joi.string()
    .alphanum()
    .required(),
    lastName: Joi.string()
    .alphanum()
    .required(),
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds:{ allow: ['com', 'net']}})
    .required(),
    passoword: Joi.string()
    .required()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))

});

module.exports = userSchema;