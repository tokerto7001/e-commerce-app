const mongoose = require('mongoose');
const Products = require('../../models/productsModel');

const allProductsController = async (req, res) => {
    try {
        // console.log(req.body)
        const { keyword, min_price, max_price, taxonomy_id, page } = req.body;
        // console.log(keyword)
        let query = {}
        keyword ? query.title = new RegExp(keyword, 'i') : null;
        min_price && max_price ? query.price = { ['$gte'] : min_price, ['$lte'] : max_price } : min_price ? query.price = { ['gte'] : min_price } : max_price ? query.price = { ['$lte'] : max_price } : null;
        taxonomy_id ? query.taxonomy_id = taxonomy_id : null;
        let products = await Products.find(query).limit(20).skip((page -1) * 20);
        // if(!keyword && !min_price && !max_price && !category){
        //     products = await Products.find().limit(20).skip((page - 1) * 20);
        // }else if(keyword){
        //     if(min_price && max_price ){
        //         products = await Products.find({title : new RegExp(keyword, 'i'), price : {$gte : min_price, $lte : max_price}}).limit(20).skip((page - 1) * 20);
        //     }else if(max_price){
        //         products = await Products.find({title : new RegExp(keyword, 'i'), price : { $lte : max_price}}).limit(20).skip((page - 1) * 20);
        //     }else if(min_price){
        //         products = await Products.find({title : new RegExp(keyword, 'i'), price : {$gte : min_price}}).limit(20).skip((page - 1) * 20);
        //     }else{
        //         products = await Products.find({title : new RegExp(keyword, 'i')}).limit(20).skip((page - 1) * 20);
        //     }
        // }else{
        //     let query = {price : {$gte : min_price, $lte : max_price}}
        //     if(min_price && max_price){
        //         products = await Products.find({price : {$gte : min_price, $lte : max_price}}).limit(20).skip((page - 1) * 20);
        //     }else if(max_price){
        //         products = await Products.find({price : { $lte : max_price}}).limit(20).skip((page - 1) * 20);
        //     }else if(min_price){
        //         products = await Products.find({price : {$gte : min_price}}).limit(20).skip((page - 1) * 20);
        //     }
        // }
        res.status(200).json({
            message: 'success',
            data: products
        });
        
    } catch (err) {
        res.send(err.message);
    }

};
module.exports = allProductsController;