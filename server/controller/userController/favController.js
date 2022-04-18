const mongoose = require('mongoose');
const Users = require('../../models/userModel');
const Products = require('../../models/productsModel');
const jwt_decode = require('jwt-decode');

exports.addFav = async (req, res) => {
    try {
        const { id } = req.params;
        const { token } = req.headers;
        const user = jwt_decode(token);
        const userId = user.userId;
        if (!id) return res.send('Invalid id');
        let product = await Products.findById(id);
        if (!product) return res.send('No product found');
        const userInfo = await Users.findById(userId);
        if (!userInfo.favs.find(el => el._id == id)) {
            userInfo.favs.push(product);
            userInfo.save();
            res.send(userInfo)
        } else {
            res.send('Already added')
        }

    } catch (err) {
        console.log(err);
        res.send('error')
    }
};
exports.deleteFav = async (req, res) => {
    const { id } = req.params;
    const { token } = req.headers;
    const user = jwt_decode(token);
    const userId = user.userId;
    if (!id) return res.send('Invalid id');
    let product = await Products.findById(id);
    if (!product) return res.send('No product found');
    const userInfo = await Users.findById(userId);
    if(userInfo.favs.find(el => el._id == id)){
        const newArray = userInfo.favs.filter(el => el._id != id);
        userInfo.favs = newArray;
        userInfo.save();
        res.send(userInfo);
    }else{
        res.send('No such document')
    }
}