let nums = [10, 20, 30, 40, 50];
console.log(nums);
nums.reverse();
console.log(nums);
nums.sort();
console.log(nums);

class Student {
    constructor(id, name, marks){
        this.id = id;
        this.name = name;
        this.marks = marks;
    }
}

let students = [];
students.push(new Student(1, 'Kasun', 75));
students.push(new Student(2, 'Ruwan', 25));
students.push(new Student(3, 'Nuwan', 99));
students.push(new Student(4, 'Supun', 63));

console.log(students);

students.sort((a, b)=> {
    if (a.marks < b.marks) return 1;
    else if (a.marks > b.marks) return -1;
    else return 0;
});
console.log(students);

console.log("---------------");

const arr = [20,10,30,40,15];
console.log('Original', arr);

/* Cloning */
const arrClone = arr.slice();
console.log('Sorted', arrClone.sort());
console.log('Reversed', arrClone.reverse());
console.log('Original', arr);

// arr.toReversed();
// arr.toSorted();


