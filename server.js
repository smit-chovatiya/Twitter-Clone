const express=require('express');
require('dotenv').config();
const db_connect=require('./Config/db-connected');
const app=express();
const User=require('./Routes/user');
const Post=require('./Routes/post');
const Like=require('./Routes/like');
const Comment=require('./Routes/comment');
app.use(express.json());

app.use('/api',User);
app.use('/api',Post);
app.use('/api',Like);
app.use('/api',Comment);
// db-connected.
db_connect();

// server are created...
const PORT=process.env.PORT;
app.listen(PORT,()=>{console.log('Server are cretaed...')});