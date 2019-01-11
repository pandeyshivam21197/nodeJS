//output- 1 3 5 2 4
//executes nrml statements the setTimeout fuctions put in queue

// console.log("1");

// setTimeout(function(){
//     console.log("2");
// },0);

// console.log("3");

// setTimeout(function(){
//     console.log("4");
// },0);

// console.log("5");

//setImmidiate

// console.log("1");

// setImmediate(function(){
//     console.log("2");
// },0);

// console.log("3");

// setImmediate(function(){
//     console.log("4");
// },0);

// console.log("5");

// both together

setTimeout(function(){
    console.log("setTimeout");
},0)

setImmediate(function()
{
    console.log("setImmediate");
})

