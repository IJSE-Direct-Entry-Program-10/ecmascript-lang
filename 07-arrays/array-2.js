let arr1 = [10, 20, 30, 40, true, 'something', 25.25, {}];

/* 
{
    "0": 10,
    "1": 20,
    "2": 30,
    "3": 40,
    "4": true,
    ...
}

*/

/* Square Bracket Notation */
console.log(arr1[0]);
console.log(arr1[4]);

console.log(arr1["0"]);
console.log(arr1["1"]);
console.log(arr1["2"]);
console.log(arr1["4"]);

/* Iterating Arrays */

/* for..in (legacy) */
/* for..of (new)    */

for(const property in arr1){
    console.log(property,":", arr1[property]);
}

for(const value of arr1){
    console.log(value);
}
