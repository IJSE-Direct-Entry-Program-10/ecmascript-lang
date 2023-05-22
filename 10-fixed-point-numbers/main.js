import * as B from 'big.js';

const num1 = new B.Big(0.3);
const num2 = new B.Big(0.2);

console.log(num1.minus(num2).toFixed(2));