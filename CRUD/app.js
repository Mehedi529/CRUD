//Basic
const express = require('express');
const app = new express();
const bodyParser = require('body-parser');



//Security Middleware Import 
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const hpp = require('hpp')
const cors = require('cors')


//Database Library Import
const mongoose = require('mongoose')


//Security Middleware Implement
app.use(cors());
app.use(hpp());
app.use(mongoSanitize());
app.use(helmet());

//body Parser Implement
app.use(bodyParser.json());


//Request Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100  //limit each IP to 100 requests per WindoMS
});
app.use(limiter);


// Mongo DB Database Connection
let URI="mongodb://127.0.0.1:27017/CRUD";
let OPTION={user:'',pass:'', autoIndex:true};
async function connectToDatabase(){
    try{
        await mongoose.connect(URI, OPTION);
        console.log("Database connected successfully");
    }
    catch(error){
        console.log("Database connection failed :" , error);
    }
}
connectToDatabase();




module.exports = app;