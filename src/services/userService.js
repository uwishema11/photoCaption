
const models = require('../database/models');

const addUser = async(givenUser)=>{
    const newUser = await models.User.create(givenUser)
    return newUser;
};

const findUserByEmail = async(email) =>{
    const user = await models.User.findOne({
        where: {
            email
        }
    })
    return user
}


module.exports = {
   addUser,
   findUserByEmail
};