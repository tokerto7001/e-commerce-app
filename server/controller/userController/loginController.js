const Users = require('../../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const loginController = async(req, res) => {
    console.log("loginController");
    try{
        const { email, password } = req.body;
        if(!email || !password) res.send('Please fill in the blanks!!');
        const emailControl = await Users.findOne({ email : email });
        if(!emailControl) res.send('No user with this email!!');
        const passwordMatch = bcrypt.compareSync(password, emailControl.password);
        if(!passwordMatch) res.send('Wrong password!!');
        const userToken = jwt.sign(
            { userId : emailControl._id },
            // process.env.AUTH_SEC_KEY
            'hasan'
        );
        
        res.status(200).json({
            message : 'success',
            data : emailControl,
            token : userToken
        });
    }catch(err){

    }
};

module.exports = loginController;