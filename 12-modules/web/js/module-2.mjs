function myMethod1(){
    console.log("My Method-1 From Module2");
}


function myMethod2(){
    console.log("My Method-2 From Module2");
}

console.log("Module - 2");

myGlobalMethod();

export {myMethod1 as my, myMethod2};