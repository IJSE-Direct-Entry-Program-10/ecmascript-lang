globalThis.xyz = 'IJSE';
console.log("Main Module");

import {myMethod1} from './module-1.js';
import abc, {myMethod2} from './module-2.js';

myMethod1();
console.log(abc);
myMethod2();
