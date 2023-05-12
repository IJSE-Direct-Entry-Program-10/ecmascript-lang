this.x = 10;
// this, globalThis

let myFun = function () {
    console.log(this.x);    // globalThis
};

myFun();

// this == globalThis == window (Browser)
// this != globalThis (Node)

console.log(this == globalThis);