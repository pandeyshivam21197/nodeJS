const fs=require("fs");
file=fs.statSync("./fie.text");
console.log(file["size"])

direcs=fs.readdirSync("/home/nineleaps/Desktop/node js exmpls/npmodules/fileSystemLOgin");
console.log(direcs);