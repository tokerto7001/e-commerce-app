const mongoose = require('mongoose');
const Products = require('../models/productsModel');

const allProductsController = async (req, res) => {
    try {
        const { keyword, min_price, max_price, page } = req.body;
        let products;
        if(!keyword && !min_price && !max_price){
            products = await Products.find({title : new RegExp(keyword, 'i') }).limit(20).skip((page - 1) * 20);
        }else if(keyword){
            if(min_price && max_price){
                products = await Products.find({title : new RegExp(keyword, 'i'), price : {$gte : min_price, $lte : max_price}}).limit(20).skip((page - 1) * 20);
            }else if(max_price){
                products = await Products.find({title : new RegExp(keyword, 'i'), price : { $lte : max_price}}).limit(20).skip((page - 1) * 20);
            }else if(min_price){
                products = await Products.find({title : new RegExp(keyword, 'i'), price : {$gte : min_price}}).limit(20).skip((page - 1) * 20);
            }else{
                products = await Products.find({title : new RegExp(keyword, 'i')}).limit(20).skip((page - 1) * 20);
            }

        }else{
            if(min_price && max_price){
                products = await Products.find({price : {$gte : min_price, $lte : max_price}}).limit(20).skip((page - 1) * 20);
            }else if(max_price){
                products = await Products.find({price : { $lte : max_price}}).limit(20).skip((page - 1) * 20);
            }else if(min_price){
                products = await Products.find({price : {$gte : min_price}}).limit(20).skip((page - 1) * 20);
            }
        }
        res.status(200).json({
            message: 'success',
            data: products
        });
        
    } catch (err) {
        res.send(err.message);
    }

};
module.exports = allProductsController;