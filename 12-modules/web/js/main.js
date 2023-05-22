// import { my as m1, myMethod2 } from "./module-2.mjs";

console.log("Main Module");

import abc from './module-1.mjs';
import * as mod2 from './module-2.mjs';

import './module-3.mjs';

console.log("Main Module");

mod2.my();
mod2.myMethod2();

function myMethod1(){
    console.log("Immmmmmm");
}



abc();
