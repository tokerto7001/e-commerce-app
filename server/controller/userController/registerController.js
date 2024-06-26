const mongoose = require('mongoose');
const Users = require('../../models/userModel');
const bcrypt = require('bcrypt');
require('dotenv').config();

const registerController = async(req, res) => {
    console.log("registerController");
    try{
        console.log(req.body);
        const { email, password, name, surname } = req.body;
        if(!email || !password) return res.send('Please fill in the blanks!');
        const emailControl = await Users.findOne({email : email})
        if(emailControl){
            return res.send('This user is already registered.')
        }else{
            const newUser = await new Users({
                name : name,
                surname : surname,
                email : email,
                password : bcrypt.hashSync(password, 8)
            });
            newUser.save()
            .then(() => res.status(200).send('success'))
            .catch((err) => {
                // console.log(err);
                res.send('Saving error')
            });
        }

    }catch(err){
        console.log(err.message);
        res.send('Invalid input')
    }
}
module.exports = registerController;