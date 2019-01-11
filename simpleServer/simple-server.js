const http =require('http');
locahost="127.0.0.1"
const server =http.createServer(function(req ,res ){
    switch(req.url)
    {
        case "/product":
            res.end("products will be sent");
            break;
        case "/review":
            res.end("reviews are sent");
            break;
        case "/feedback":
            res.end("feedback sent!!");
            break;
        default:
            res.end("hello world!!!");
            break;
    }
});
server.listen(8080,locahost,function(error){
    if(error)
    {
        console.log("server couldnt be startd |error="+error.message);
        return;
    }
    
    console.log("server has started -chck http://localhost:8080");
});
