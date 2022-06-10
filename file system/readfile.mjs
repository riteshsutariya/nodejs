import fs from 'fs/promises'

//if we dont use encoding parameter(utf-8) then it will return buffer content(bytes) of file, then we need to convert 
// stream bytes to string using toString() method
const output = await fs.readFile(new URL('file1.txt',import.meta.url), 'utf-8', (err) => {
    if (err) {
        throw err;
    }
    // console.log(output);
});


console.log(output);