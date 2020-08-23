//imported required packages
const express = require("express");
const mongoose =require("mongoose");
const url = 'mongodb://localhost/testdb';
const db =mongoose.connection;

//connect mongodb with connect method
mongoose.connect(url,{useNewUrlParser:true});

//veryfying connection
db.once('open',_=>{
    console.log('databse connected:', url);
});

db.on('error',(err)=>{
    console.error('connection failed:',err);
});