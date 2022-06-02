const express = require("express");
const app = express();
const bodyParser = require('body-parser');

//middleware
app.use(bodyParser.json());

require('dotenv/config');
const api = process.env.API_URL;

app.get(`${api}/products`,(req,res)=>{    
    const product={
        id:1,
        name:'John Smith',
        profession :'Software Engineer'
    }
    res.send(product);
});

app.listen(3000,()=>{
    console.log(api);
    console.log('Server is running at http://localhost:3000');
});
