const express=require('express');
const app=express();
const port=3001;

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.end('<p>that\'s all from my side!</p>');
})

app.listen(port,()=>{
    console.log(`app lisdtening on port ${port}`);
})