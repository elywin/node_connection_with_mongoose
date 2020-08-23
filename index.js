//imported required packages
const express = require("express");
const mongoose =require("mongoose");
const url = 'mongodb://localhost/testdb';

//connect mongodb with connect method
mongoose.connect(url,{useNewUrlParser:true});

