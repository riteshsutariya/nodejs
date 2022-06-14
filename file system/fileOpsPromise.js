const fs=require('fs');
const getContents=filename=>{
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

const putContents=(filename,content)=>{
  return new Promise((resolve,reject)=>{
    fs.writeFile(filename,content,(err)=>{
        if(err)
        {
            reject(err);
        }
        else{
            resolve('data written to the file successfully.');
        }
    })
  })
}

getContents('file1.txt').then((data)=>{
    console.log("depth-0");
    console.log(data);
    return data.toString();
}).then((data)=>{            //chaining Promises
    console.log("depth-1");
    console.log(data);
    return data;
}).then((data)=>{            //chaining Promise
    console.log("depth-2");
    console.log("length of file: "+data.length);
}).catch(err=>{
    console.error(err);
})

putContents('file2.txt','today is tuesday.').then((respMsg)=>{
    console.log(respMsg);
}).catch(err=>{
    console.log(err);
})