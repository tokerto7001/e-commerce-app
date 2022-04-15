const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
        min : 0,
        required : true
    },
    num_favorers : {
        type : Number,
        default : 0,
        min : 0
    },
    tags : {
        type : [String],
        default : []
    },
    processing_min : {
        type : Number,
        min : 0
    },
    processing_max : {
        type : Number,
        min : 0
    },
    price : {
        type : Number,
        min : 0,
        required : true
    },
    img : {
        type : String,
        default : 'https://mcnairshirts.com/wp-content/uploads/2019/03/mcnair-mens-plasmadry-olive-force-shirt-1500sq.jpg'
    },
    onSale : {
        type : Boolean,
        default : true,
        required : true
    }
})

const Products = mongoose.model('Product', productSchema);
module.exports = Products;
