const fs=require('fs');


   fs.readFile('module/file.txt','utf-8',(err,data)=>{
    try{
    if(err)
    {
        throw err;
    }else{
        console.log(data);
    }}catch(err){
        console.log(err);
        console.log("happy ending.");
        }
   });