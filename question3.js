//import express and create an instance of express
const express = require ('express');
const app = express();

//create route for question3
app.get('/question3',(req,res)=>{
    res.json({message: 'Express is working! write your full name'});
});

//port 3000 is listening to check if its working
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});