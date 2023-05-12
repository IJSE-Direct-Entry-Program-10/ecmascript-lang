let myObj = {
    id: "S001",
    name: "Kasun"
};

myObj.address = 'Gallle';
console.log(myObj);

myObj.print = function(){
    console.log(this.id, this.name, this.address);
}

myObj.print();
delete myObj.name;
console.log("is id property available?", 'id' in myObj);
delete myObj.id;
myObj.print();
console.log(myObj);

delete myObj.print;
console.log(myObj);

console.log("is id property available?", 'id' in myObj);
console.log("----------------");

console.log('name' in myObj);
console.log('print' in myObj);
console.log('address' in myObj);

console.log("----------------");

let customer = {
    id: "C001",
    name: "Kasun Sampath",
    address: "Galle",
    print(){
        console.log(this.id, this.name, this.address);
    }
};

/* OLD */
let student = {
    id: customer.id,
    name: customer.name,
    address: customer.address
};
let student3 = Object.assign({}, customer);

/* NEW SYNTAX (SPREAD OPERATOR) */
let student2 = { ...customer, printDetails(){} };

console.log(student3);
console.log(student2);

console.log("-------------------------");

let myObj2 = {
    id: "C001",
    name: "Kasun",
    address: "Galle"
};

/* for ... in [To iterate properties of an object] */

for(let property in myObj2){
    console.log(property,":", myObj2[property]);
}

// console.log('name' in myObj2);
// delete myObj2.name;
// console.log('name' in myObj2);

console.log("-------------------------");

let descriptor = Object
        .getOwnPropertyDescriptor(myObj2, 'address');
console.log(descriptor);

descriptor.configurable = false;
descriptor.writable = false;
descriptor.enumerable = false;
Object.defineProperty(myObj2, 'address', descriptor);
console.log(descriptor);

console.log(myObj2.address);
myObj2.address = 'Pandura';
delete myObj2.address;
console.log(myObj2.address);

console.log('address' in myObj2);

for(let property in myObj2){
    console.log(property,":", myObj2[property]);
}

let myObj3 = new Object();
myObj3.id = 'Test';
myObj3.name = 'Testing';

console.log(myObj3);

console.log('-----------------');

/* function getEmployee(){
    return {
        _id: 1,
        get id(){
            return 'E00' + this._id;
        },
        name: 'Ruwan',
        address: 'Galle'
    };
}

let e1 = getEmployee();
e1._id = 'adsfa';
console.log(e1._id);
console.log(e1.id); */

function getEmployee(){
    let symId = Symbol();
    return {
        [symId]: 1,
        get id(){
            return 'E00' + this[symId];
        },
        name: 'Ruwan',
        address: 'Galle'
    };
}

let e1 = getEmployee();
console.log(e1.id);

let dep = {
    ["+"]: 10,
    ["0"]: 55
};

console.log(dep["+"]);
console.log(dep["0"]);