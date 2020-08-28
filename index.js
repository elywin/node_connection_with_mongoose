//imported required packages
const express = require("express");
const mongoose =require('mongoose');
const url = 'mongodb://localhost/testdb';
// const db =mongoose.connection;
const app =express();

//connect mongodb with connect method
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true });
const db = mongoose.connection;
//veryfying connection
db.once('open',_=>{
    console.log('databse connected:', url);
});

db.on('error',(err)=>{
    console.error('connection failed:',err);
});

app.get('/',(req,res)=>{
    res.send('hello world!');
}).listen(2001,_=>{
    console.log('server running on http://localhost:2001');
});


//organise data //create schema 
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    }
});

//create the model
const User= mongoose.model('User',userSchema);
const elywin = new User ({name:'elywin'});

//save model
elywin.save(function(err,elywin){
    if(err) return console.error(err);
    console.log("Document inserted succussfully!");
});
