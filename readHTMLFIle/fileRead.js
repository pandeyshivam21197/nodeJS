const fs=require("fs");
fs.readFile("./index.html","utf8",function(error,data){
    if(error)
    {
        console.log("error while reading file| error="+error.message);
        return;
    }
    console.log("**file contents are**");
    console.log(data.toString());
})