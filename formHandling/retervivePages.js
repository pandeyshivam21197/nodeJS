//login contact info ,save the info in a file structured files (.text),then get those files names from directories
const http=require("http");
anyBody=require("body/any");

const queryString=require("querystring");
const url=require("url");

server=http.createServer(function(req,res){
    // const urlParts=url.parse(req.url,true);
    // console.log(urlParts);

    switch(req.url)
    {

        case "/":
            file=require("fs")
            file.readFile("/home/nineleaps/Desktop/node js exmpls/npmodules/pagesNavigation/home.html","utf8",function(error,data)
            {
                if(error)
                {
                    res.end("home not found");
                }
                res.end(data)
            })
            break;
        case "/save":
            anyBody(req,res,{},function(error,body){
                if(error)
                {
                    res.end("Some error occured!");
                }
                file=require("fs");
                false.writeFile(`./userfiles/${body.user}.text`,`name:${body.user} | password:${body.pass}`,'utf8',function(error){
                    if(error)
                    {
                        res.end("coulldnt write to file!!");
                    }
                    res.end(`hi ${body.user} your data has been saved!!!`);
                })
                
            })
            case "/contactForm":
            file=require("fs")
            file.readFile("./contactForm.html","utf8",function(error,data)
            {
                if(error)
                {
                    res.end("home not found");
                }
                res.end(data)
            })
            break;

            case "/getContacts?num=2":
                fs=require("fs");
                files=fs.readdirSync("./userfiles");
                n=
                res.end(JSON.stringify( files.slice(0,n)));
            
            
    }
});
server.listen(8085);