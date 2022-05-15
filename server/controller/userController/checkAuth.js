const Users = require('../../models/userModel');
const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');

const checkAuth = async(req, res) => {
    try{
        const token = req.token;
        if(!token) return res.send('token undefined');
        const user = jwt_decode(token)
        const userId = user.userId;
        if(!userId) return res.send('no user');
        const userInfo = await Users.findById(userId)
        res.status(200).json({
            message : 'success',
            data : userInfo
        })
    }catch(err){
        res.send('auth error')
    }
};
module.exports = checkAuth;