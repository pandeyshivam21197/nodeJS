const exp=require("./export.js");
sq=(x,y)=>exp.sum(x,y)*exp.sum(x*y);
module.exports={
    "squareOfSum":sq
}
