const mongoose = require('mongoose');
const Products = require('../models/productsModel');

const oneProductController = async(req, res) => {
    try{
        const { id } = req.params;
        if(id){
            const product = await Products.findById(id);
            res.status(200).send({
                message : 'success',
                data : product
            })
        }else{
            res.send('Invalid id')
        }
    }catch(err){
        res.send(err.message)
    }   
}
module.exports = oneProductController;