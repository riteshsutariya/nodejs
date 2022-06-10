let p=require('process');
console.log("process id: "+p.pid);
console.log("process title: "+p.title);
console.log("current working directory of process: "+p.cwd());
console.log("CPU architecture of computer: "+p.arch);
console.log("process platform: "+p.platform);

// p.kill(p.pid);  this will kill current process 
//warning dont't pass other process id otherwise that process will be killed forcefully and all operations will be cleaned

//user environment
console.log(p.env);

//there are lot many things we can do with process global object 

//see entire object
console.log(p);
