const http=require("http");
server=http.createServer(function(req,res){
    

    switch(req.url)
    {
        case "/about":
            file=require("fs")
            file.readFile("/home/nineleaps/Desktop/node js exmpls/npmodules/pagesNavigation/about.html","utf8",function(error,data)
            {
                if(error)
                {
                    res.end("about not found");
                }
                res.end(data)
            })
            break;

        case "/contact":
        file=require("fs")
            file.readFile("/home/nineleaps/Desktop/node js exmpls/npmodules/pagesNavigation/contact.html","utf8",function(error,data)
            {
                if(error)
                {
                    res.end("contact not found");
                    res.statusCode=404;
                }
                res.end(data)
            })
            break;
        default:
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



    }
});
server.listen(8085);