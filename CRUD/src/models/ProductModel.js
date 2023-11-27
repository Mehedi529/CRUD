const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    productName:{type:String,required:true},
    productCode:{type:Number,required:true, unique:true},
    Img:{type:String},
    unitPrice:{type:Number, default:100},
    quantity:{type:Number,required:true},
    totalPrice:{type:Number, required:true}
},{versionKey:false , timeStamp:true})

const ProductModel = mongoose.model('products',DataSchema);
module.exports = ProductModel;