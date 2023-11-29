const ProductModel = require('../models/ProductModel');

//CRUD

//C = Create
exports.CreateProduct = async(req,res)=>{

    try{
        let reqBody = req.body;
        let result = await ProductModel.create(reqBody);
        res.status(201).json({status:"success",message:result})
    }
    catch(error){
        res.status(201).json({status:"failed to create product",message:error.toString()});
    }
}


// R = Read
exports.ReadProduct = async (req,res)=>{

    try{
        let result = await ProductModel.find();
        res.status(200).json({status:"success", message:result})
    }
    catch(error){
        res.status(200).json({status:"failed to read product",message:error.toString()});
    }
}
//Read By ID
exports.ReadProductByID = async(req,res)=>{

    try{
        let id = req.params.id;
        let result = await ProductModel.find({_id:id});
        res.status(200).json({status:"success",message:result})
    }
    catch(error){
        res.status(200).json({status:"failed to read product by ID", message:error.toString()});
    }
}


// U = Update
exports.UpdateProduct = async(req,res)=>{

    try{
        let id = req.params.id;
        let reqBody = req.body;
        let result = await ProductModel.updateOne({_id:id},reqBody);
        res.status(200).json({status:"updated successfully", message:result})
    }
    catch(error){
        res.status(200).json({status:"updated failed", message:error.toString()})
    }
}


//D = Delete
exports.DeleteProduct = async (req,res)=>{

    try{
        let id = req.params.id;
        let result = await ProductModel.deleteOne({_id:id});
        res.status(200).json({status:"Delete the product successfully" , message:result})
    }
    catch(error){
        res.status(200).json({status:"Failed to Delete the Product", message:error.toString()});
    }
}