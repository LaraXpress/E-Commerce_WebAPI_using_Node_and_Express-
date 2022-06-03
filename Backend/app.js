const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

require('dotenv/config');
const api = process.env.API_URL;

mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>{
    console.log('Database connection is ready to use');
})
.catch((error)=>{
    console.log(error);
})

const productSchema = mongoose.Schema({
    name:String,
    image:String,
    countInStock:Number
})
const Product = mongoose.model('Product',productSchema);

app.get(`${api}/products`,(req,res)=>{    
    const product={
        id:1,
        name:'John Smith',
        profession :'Software Engineer'
    }
    res.send(product);
});

app.post(`${api}/products`,(req,res)=>{    
    
    const product = new Product({
        name:req.body.name,
        image:req.body.image,
        countInStock:req.body.countInStock
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

app.listen(3000,()=>{
    console.log(api);
    console.log('Server is running at http://localhost:3000');
});
