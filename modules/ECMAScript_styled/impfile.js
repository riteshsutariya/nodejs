// const { addTwo } = require("./addTwo.mjs");

//importing every part of module using object destructuring
import { addTwo } from './addTwo.js'
import {add,sub,mul,div,} from './methods.js';
// console.log(imp);
console.log("addition of 55 and 88: " + addTwo(55, 88));
console.log("addition of 55 and 33: "+add(44,66));
console.log("subtraction of 33 from 55: "+sub(55,33));

//importing whole module in one object and use of that module
/*
import * as imp from './methods.js'
console.log("addition of 55 and 33: " + imp.add(44, 66));
console.log("multiplication of 5 and 3: " + imp.mul(5, 3));
*/