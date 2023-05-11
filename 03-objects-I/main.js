console.log("Objects, Arrays, Functions - I");

/* Create objects via Object Literal */
/* Object Literal = Object Initailizer */
let myObj = {};
console.log(typeof myObj);
console.log(myObj);

myObj.id = 'C001';
myObj.name = 'Kasun Sampath';
myObj.address = 'Galle';

console.log(myObj);
console.log("----------------");

console.log(myObj.id);
console.log(myObj.name);
console.log(myObj.address);
console.log(myObj.contact);
myObj.contact = '077-1234567';
console.log(myObj.contact);
console.log("----------------");

/* Methods = Functions */
/* Anonymous Function Expression */
myObj.print = function (){
    console.log(this.id, this.name, this.address);
};
console.log(myObj.print);
console.log(myObj instanceof Object);
console.log(myObj.print instanceof Object);
console.log(typeof myObj.print);
console.log("----------------");

myObj.print();

/* Lambda Function = Lambda Expression */
myObj.setFullName = (name) => {
    this.name = name;
};

myObj.setFullName();
myObj.print();

console.log("----------------");

let myStudent = {};
myStudent.id = 'S001';
myStudent.name = 'Kasun';

/* Function Literal */
function printDetails(){
    //console.log(this);
    console.log(this.id, this.name);
}

// let printDetails = function (){
//     console.log("Let's print something");
// }

// printDetails();
let myFun = printDetails;
// myFun();

myStudent.print = printDetails;
myStudent.print();
