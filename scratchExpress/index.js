const express=require("express");

const indexRouter=require("./routers/index");
const contactRouter=require("./routers/contact");
const aboutRouter=require("./routers/about");

const readRouter=require("./routers/product");


const app=express();

app.use(indexRouter);
app.use(contactRouter);
app.use(aboutRouter);
app.use(readRouter);
//the below statement we have describe inside index.js inside router folder---

// app.get('/',function(req,res){
//     data=fs.readFile("/home/nineleaps/Desktop/node js exmpls/npmodules/scratchExpress/contact.json","utf8",function(error,data){
//         res.send(data);
//     });
    
    //in express-
    // res.sendfile("/home/nineleaps/Desktop/node js exmpls/npmodules/scratchExpress/contact.json")

// })

app.listen(8080,function(error){
    if(error)
    {
        console.log("problem starting the serever:",error.message);
        return;

    }
    console.log("check:http://localhost:8080/");

})