const mongoose = require('mongoose');
const Users = require('../../models/userModel');
const Products = require('../../models/productsModel');
const jwt_decode = require('jwt-decode');

exports.addCard = async(req, res) => {
    try{
        const { id } = req.params;
        const { token } = req.headers;
        const user = jwt_decode(token);
        const userId = user.userId
        // console.log(userId);
        // console.log(id);
        if(!id) res.send('Invalid id');
        let product = await Products.findById(id);
        if(!product) res.send('No product found');
        if(product.quantity == 0) res.send('Out of stock');
        let userInfo = await Users.findById(userId);
        if(!userInfo) res.send('No user found');
        product.quantity --;
        product.save();
        userInfo.card.map((el) => {
            if(el._id == id){
                console.log(el);
                el.inCard ++
            }
        })
        let doesExist = userInfo.card.filter(el => el._id == id);
        if(!doesExist.length){
            product.inCard = 1
            userInfo.card.push(product);
        }
        // console.log(product);
        userInfo.save();
        res.send({
            message : 'success',
            data : userInfo
        });
    }catch(err){
        res.send('Invalid input')
    }
}