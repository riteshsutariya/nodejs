#!/usr/bin/env node
const http=require('http');

const hostname='127.0.0.1';
const port=3000;

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Conteent-Type','text/plain');
    res.end("generated from our pure indian server.\n");
})

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});

//exiting from node script
/*
process.on('SIGTERM', () => {
    server.close(() => {
      console.log('Process terminated');
    });
  });

process.kill(process.pid,'SIGTERM');*/

//environment variables
console.log(process.env);

console.log(process);