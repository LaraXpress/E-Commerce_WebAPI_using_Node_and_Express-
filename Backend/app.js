const express = require("express");
const app = express();

require('dotenv/config');
const api = process.env.API_URL;

app.get(api+'/products',(req,res)=>{    
    res.send("Hello Mazed, Welcome to Node JS in Bangladesh");
});

app.listen(3000,()=>{
    console.log(api);
    console.log('Server is running at http://localhost:3000');
});
