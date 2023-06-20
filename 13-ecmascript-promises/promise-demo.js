async function doSomething(){
    let x = 0;
    for (let i = 0; i < 1000; i++) {
        x += i;
    }
    return x;
}

const promise = doSomething();
// const value = doSomething();
// console.log(value);
promise.then(value => console.log(value));
console.log("Working....!");