let arr1 = new Array();
console.log(arr1.length);

let arr2 = new Array(10);
console.log(arr2.length);

for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

let arr3 = new Array(10, 20, 30, 40, 50);
console.log(arr3.length);

for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}

/* Array Literal = Array Initializer */
let arr4 = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(Array.isArray(arr4));
console.log(arr4.length);