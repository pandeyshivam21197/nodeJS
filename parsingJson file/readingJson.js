const http=require("http");
localhost="127.0.0.1"
const product=require("/home/nineleaps/Desktop/node js exmpls/product.json");
const review=require("/home/nineleaps/Desktop/node js exmpls/review.json");
// const server=http.createServer(function(req,res)
// {
//     switch(req.url)
//     {
//         case "/product":
//             res.end(JSON.stringify(product));
//             break;
//         case "/review":
//             res.end(JSON.stringify(review));
//             break;
//         default:
//             res.end("its ended");

//     }
// });
const server=http.createServer();
function requestHandler(req,res)
{
    switch(req.url)
    {
        case "/product":
            res.end(JSON.stringify(product));
            break;
        case "/review":
            res.end(JSON.stringify(review));
            break;
        default:
            res.end("its ended");
            break;

    }
}
server.on("request",requestHandler);

// server.listen(8080,locahost,function(error){
//     if(error)
//     {
//         console.log("server couldnt be startd |error="+error.message);
//         return;
//     }
    
//     console.log("server has started -chck http://localhost:8080");
// });
server.listen(8080,localhost);
function listenHandler(error)
{
    if(error)
        {
            console.log("server couldnt be startd |error="+error.message);
            return;
        }
        
        console.log("server has started -chck http://localhost:8080");
}
server.on("listening",listenHandler);