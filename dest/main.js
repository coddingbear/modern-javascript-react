'use strict';

var _calculator = require('./calculator');

var cal = _interopRequireWildcard(_calculator);

var _multiply = require('./multiply');

var _multiply2 = _interopRequireDefault(_multiply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

console.log(cal.add(10, 100));
console.log(cal.sub(10, 100));
console.log(cal.mul(10, 100));
console.log(cal.div(10, 100));

console.log((0, _multiply2.default)(20, 45));