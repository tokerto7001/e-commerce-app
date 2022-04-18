const Users = require('../../models/userModel');
const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');

const checkAuth = async(req, res) => {
    try{
        const { token } = req.body;
        if(!token) return res.send('token undefined');
        const user = jwt_decode(token)
        const userId = user.userId;
        if(!userId) return res.send('no user');
        const user = await Users.findById(userId)
        res.status(200).json({
            message : 'success',
            data : user
        })
    }catch(err){
        res.send('auth error')
    }
};
module.exports = checkAuth;