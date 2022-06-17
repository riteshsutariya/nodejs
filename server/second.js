const http=require('http');
const port=process.env.port||3000;

const server=http.createServer((req,res)=>{

    switch(req.method)
    {
                case 'GET':
            res.statusCode=200;
            res.setHeader('Content-Type','text/html');
            res.end('<h2>Get Request Response.</h2>');
            break;
                case 'POST':
                res.statusCode=201;
            res.setHeader('Content-Type','text/html');
            res.end('<h2>Post Request Response.</h2>');
                break;
                case 'PUT':
            res.statusCode=200;
            res.setHeader('Content-Type','text/html');
            res.end('<h2>Put Request Response.</h2>');
                    break;
                case 'DELETE':
                        res.statusCode=200;
            res.setHeader('Content-Type','text/html');
            res.end('<h2>Delete Request Response.</h2>');
                        break;
            default:
                            res.statusCode=200;
                            res.setHeader('Content-Type','text/html');
                            res.end('unhandled request type: '+req.method);
    }
})

server.listen(port,()=>{
    console.log(`server listening on ${port}`);
})