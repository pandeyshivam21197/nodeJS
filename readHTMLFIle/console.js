console.log("log method");
var john={
    name:"john",
    age:32,
    contact:['john.doe@example.com',
    'john.doe@gmail.com']
};
//log displays tostring rep ,dir dispay tree rep 
console.log(john);
console.dir(john);
console.dir(john,{depth:0});
console.dir(john,{depth:1});