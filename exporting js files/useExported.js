//if many exported fucntions are there in diff files it will be called only once or included only once .example - sum fucn def in exported and expoert2
const exportedFunc=require("./export.js");
const exportedFunc2=require("./export2.js");
x=10;
y=20;
console.log(exportedFunc.sum(x,y));
console.log(exportedFunc2.squareOfSum(x,y));