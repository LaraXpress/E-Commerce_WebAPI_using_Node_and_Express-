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

app.listen(3000,()=>{
    console.log(api);
    console.log('Server is running at http://localhost:3000');
});
