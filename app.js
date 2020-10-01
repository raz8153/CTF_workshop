const http=require('http')
const path=require('path');

const express = require('express')
const bodyParser = require('body-parser')

const app=express();

const homeRoute=require('./routes/home')
const q1=require('./routes/q1')
const q2=require('./routes/q2')
const q3=require('./routes/q3')
const q4=require('./routes/q4')
const q5=require('./routes/q4-1');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

app.use(homeRoute );
app.use(q1);
app.use(q2);
app.use(q3);
app.use(q4);
app.use(q5);

console.log('Server at localhost:3000')

app.listen(process.env.PORT || 3000);