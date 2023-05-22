console.log("Module 2");

function myMethod2(){
    console.log("MyMethod2() from Module2");
}

let x = 'something';

export default x;
export {myMethod2};