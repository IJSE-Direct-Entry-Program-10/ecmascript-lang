/* Array API */
/* ECMAScript Arrays are Dynamic Arrays */

const myArray = [];
console.log(myArray.length);
console.log(Array.isArray(myArray));
console.log(Array.isArray({}));

/* Adding */

myArray.push(10,20,30);     // push = append (tail)
console.log(myArray);
myArray.push(40, 50);
console.log(myArray);
console.log(myArray.length);

myArray.unshift(-20, -10);  // unshift = prepend (head)
console.log(myArray);
myArray.unshift(-30);
console.log(myArray);

/* splice (pos, 0, insert value(s)) */
myArray.splice(3, 0, -5, 0, 5);
console.log(myArray);

/* Removing */

myArray.pop();              // pop = remove from tail
console.log(myArray);
let removedItem = myArray.pop();
console.log("Removed Item: ", removedItem);
console.log(myArray);

myArray.shift();            // shift = remove from head
console.log(myArray);
removedItem = myArray.shift();
console.log("Removed Item: ", removedItem);
console.log(myArray);

/* splice (pos, delete count [1]) */
let removedItems = myArray.splice(2, 3);
console.log(myArray);
console.log("Removed Items: ", removedItems);