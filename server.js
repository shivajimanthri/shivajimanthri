const express = require('express');
const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const users = require('./routes/users');

const app = express();



const db = 'mongodb+srv://shivaji001:shivaji001@cluster0.adyrh.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(db, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
 }).then(
    ()=>console.log("db connected...!")
 ).catch(err=>console.log(err))

 app.use(express.json())  //middlewear
 app.use('/users',users);


app.listen(3000,()=>console.log("server running...!"))