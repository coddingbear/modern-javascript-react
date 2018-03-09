// import {
//   add, 
//   sub as substract, 
//   mul as multiply, 
//   div as divide 
// } from './calculator';

// console.log(add(10, 100));
// console.log(substract(10, 100));
// console.log(multiply(10, 100)); 
// console.log(divide(10, 100)); 

import * as cal from './calculator';
import multiply from './multiply';

console.log(cal.add(10, 100));
console.log(cal.sub(10, 100));
console.log(cal.mul(10, 100));
console.log(cal.div(10, 100));

console.log(multiply(20, 45));