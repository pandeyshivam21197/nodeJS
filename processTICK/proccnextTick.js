console.log(process);
setImmediate(function(){
    console.log("inside setImmidiate fuction");
});
setTimeout(function(){
    console.log("inside setTimeout fucntion");

},0);
process.nextTick(function(){
    console.log("inside process.nextTick() fucntion");
});
console.log("last line ");