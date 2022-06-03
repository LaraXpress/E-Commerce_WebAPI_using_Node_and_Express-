const {Product} = require('../models/products')
const express = require('express');
const router = express.Router();

router.get('/', async (req,res)=>{    
    const productList = await Product.find();
    if(!productList){
    	 res.status(201).json({success:false})
    }    
    res.send(productList);
});

router.post('/count',(req,res)=>{    
    
    const product = new Product({
        name:req.body.name,
        image:req.body.image,
        countInStock : req.body.countInStock
    })    
    product.save().then((createProduct=>{
        res.status(201).json(createProduct)
    })).catch((err)=>{
        res.status(501).json({
            error:err,
            success:false
        })
    })        
});

module.exports = router;
