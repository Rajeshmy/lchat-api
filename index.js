require("dotenv").config();

const express = require('express');
const sendMessage = require('./routes/sendMessage')
const signIn = require('./routes/signin')
const signUp = require('./routes/signup')
const port = process.env.PORT||5000;
const path = require('path');
const mongoose = require('mongoose');


const app = express();
app.use(express.static(path.resolve('./index.html')))
app.use(express.json())

//routers
app.use('/signin',signIn)
app.use('/signup',signUp)
app.use('/sendmessage',sendMessage)

//send frontend file at root api
app.get('/',(req,res)=>{
    res.sendFile(path.resolve('./index.html'))
});


app.listen(port,()=>{
    console.log("lintening at ",port);

    mongoose.connect(process.env.MONGODB_CONNECTION).then(()=>{
        console.log("connected to database");
    }).catch((err)=>{
        console.log("error while databse connection",err);
    })
});