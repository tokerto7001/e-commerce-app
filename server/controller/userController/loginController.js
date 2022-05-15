const Users = require('../../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const loginController = async(req, res) => {
    try{
        const { email, password } = req.body;
        if(!email || !password) return res.send('Please fill in the blanks!!');
        const emailControl = await Users.findOne({ email : email });
        // console.log(emailControl)
        if(!emailControl) return res.send('No user with this email!!');
        const passwordMatch = bcrypt.compareSync(password, emailControl.password);
        if(!passwordMatch) return res.send('Wrong password!!');
        const userToken = jwt.sign(
            { userId : emailControl._id },
            process.env.AUTH_SEC_KEY
        );
        emailControl.password = null;

        res.status(200).json({
            message : 'success',
            data : emailControl,
            token : userToken
        });
    }catch(err){

    }
};

module.exports = loginController;