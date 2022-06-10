// const { func } = require('./calc');

/*
//importing whole file as module

const operations= require('./calc');

*/

//importing seprate parts of file from module{destructuring module}

const {operations}=require('./calc');
const {func}=require('./calc');

const wholemod=require('./calc');

console.log(operations);
console.log(func);


console.log(typeof operations);
console.log("addition: "+operations.add(10,20));
console.log("subtraction: "+operations.sub(50,20));
console.log("multiplication: "+operations.mul(11,8));
console.log("division: "+operations.div(88,11));
func();

console.log();

wholemod.pow(5,6);

// func();