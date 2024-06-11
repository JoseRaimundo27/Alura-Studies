const User = require('../models/User');

module.exports = class AuthRegisterUserController {
    static async(req, res) {
        res.send({message:'Welcome to my API'});
    }};

   