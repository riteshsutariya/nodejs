import {writeFile} from 'fs/promises'

const content='content to write into file';
await writeFile(new URL('file2.txt',import.meta.url),content,(err)=>{
    if(err)
    {
        throw err;
    }
})

console.log("file written successfully");
