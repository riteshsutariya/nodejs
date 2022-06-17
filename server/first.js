const http=require('http');

const PORT=process.env.PORT||3000;

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    console.log("serving request.");
    console.log(http.IncomingMessage);
    res.setHeader('Content-type','text/html');
    res.end('<h2>Hello From Node Server!</h2>');
})

server.listen(PORT,()=>{
    console.log("Server Running On Port "+PORT);
})