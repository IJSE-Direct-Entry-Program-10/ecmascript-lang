// function myMethod(id, name, address){
//     console.log(Array.isArray(arguments));
//     console.log("id: ", arguments[0], id);
//     console.log("name: ", arguments[1], name);
//     console.log("address: ", arguments[2], address);
// }

function myMethod(...args) {
    console.log(Array.isArray(args));
    console.log(Array.isArray(arguments));
    console.log("id: ", args[0], arguments[0]);
    console.log("name: ", args[1], arguments[1]);
    console.log("address: ", args[2], arguments[2]);
}


myMethod(1, 'John', 'Galle');

// let abc = new Array();
// console.log(Array.isArray(abc));

console.log("--------------");

let myArray = new Array(1, 2, 3, 4, 5, 6);

// Collecting (REST)
function printDetails(a, b, ...args) {
    console.log(a, b);
    console.log(args);
}

printDetails(...myArray, 10, 20);   // Spreading (SPREAD)
// printDetails(myArray[0], myArray[1], myArray[2], myArray[3]);
