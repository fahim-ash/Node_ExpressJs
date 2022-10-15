const express=require('express');
const app=express();

const userRoute=require('./routes/users');
const userComments=require('./routes/comments');

app.use('/users',userRoute);
app.use('/comments',userComments);

app.listen(3000);
console.log("server is running on port 3000");