let myArray = new Array(10);

// fill(value, starting pos, ending pos)
myArray.fill([10,20], 2, 8);
console.log(myArray);

// Replacing

myArray = [10,20,30,40,50];

// myArray[2] = 25;
// console.log(myArray);

// splice(pos, replace count, value set)
myArray.splice(2, 1, 25, 30, 35);
console.log(myArray);

console.log(myArray.includes(22));
console.log(myArray.includes(25));

console.log(myArray.indexOf(25));

myArray.splice(2, 0, 25, 25, 25);
console.log(myArray);

console.log(myArray.lastIndexOf(25));

/*  includes (new)
    indexOf (legacy)
*/
console.log(myArray.indexOf(27));
console.log(myArray);

myArray.forEach(value => console.log(value));
let filteredArray =  myArray.filter(value => value != 25);
console.log(filteredArray);

// let x = 0;
// for(let value of filteredArray){
//     value *= 10;
//     filteredArray[x++] = value;
// }

let revampedArray = filteredArray.map(value => value + 'IJSE')
console.log(revampedArray);