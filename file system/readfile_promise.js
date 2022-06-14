const fs=require('fs');

const getFile=filename=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(filename,(err,data)=>{
            if(err)
            {
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

getFile('file1.txt').then((data)=>{
    console.log(data.toString());
}).
catch(err=>{
    console.error(err);
})