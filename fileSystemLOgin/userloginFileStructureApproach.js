const anyBody=require("body/any");
const http=require("http");
const users=require("/home/nineleaps/Desktop/node js exmpls/npmodules/users.json");
console.log(users);
const server =http.createServer(function(req,res)
{
    anyBody(req,res,{},function(error,body){
        if(error)
        {
            res.end("Some error ocuured");
            return;
        }
        //to update the header-
        res.setHeader("content-type","text/html");
        res.setHeader('Set-cookie','session_id=123');

        // res.setHeader("cookie",no)   
        // console.log(body);
        users.forEach(function(bod)
        {
            console.log(bod.username,bod.password);

            if(body.username===bod.username && body.password===bod.password)
            {
                res.end("LOggd in!!!");

            }
        }); //check the whole document then chechk for undefined or not found below
        //or we can use some function to parse the users 
        
            if(body.username===undefined || body.password===undefined)
            {
                res.end("username or password is missing");
            }
            else{
                res.end("username or password is incorrect.You are not authorized");
            }

        
        
        
    });
});
server.listen(8085);