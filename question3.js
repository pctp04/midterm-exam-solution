const express = require ('express');
const app = express();

app.get('/question3',(req,res)=>{
    res.json({message: 'Express is working! write your full name'});
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});