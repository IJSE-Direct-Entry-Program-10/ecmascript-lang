let myObj = {
    id: 'C001',
    name: 'Kasun',
    address: 'Panadura',
    print: function(){
        console.log(this.id, this.name, this.address);
    }
};

myObj.print();

let myObj2 = {
    id: 'C001',
    name: 'Kasun',
    address: 'Panadura',
    print: () => {
        console.log(myObj2.id, myObj2.name, myObj2.address);
    }
};

myObj2.print();

// We can't explicitly set `this` for arrow functions
// myObj2.print.call(myObj2);

let json = JSON.stringify(myObj2);
console.log(json);

json = `
        {
            "id": "S001",
            "name": "Ruawan",
            "address": "Galle",
            "contacts": ["011-1234567","031-1234567"]
        }
        `;

let myObj3 = JSON.parse(json);
console.log(myObj3);

console.log("---------------");

let myObj4 = {
    id: 'E001',
    _name: '',                  /*  private */
    get name(){
        return this._name;
    },
    set name(someName){
        this._name = someName;
    },
    print (){
        console.log(this.id, this.name);
    }
};

/* 
    _idientifier    : private
    __identifier__  : private private
*/

// Accessor Property (Accessor Instance Variable)
// Data Property (Data Instance Variable)
myObj4.name = 'Ruwan Sampath';
console.log(myObj4.name);
myObj4.print();

let id = 'C001';
let name = 'Kasun';
let address = 'Galle';

/* OLD */
let myObj5 = {
    id:id,
    name: name,
    address: address,
    printDetails: function(){

    }
};

/* NEW SYNTAX */
let myObj5Clone = {
    id, name, address,
    printDetails(){

    }
};

console.log(myObj5);
console.log(myObj5Clone);

console.log("---------------");

let myObj6 = {
    _id: 0,
    _name: "",
    getId(){
        return this._id;
    },
    setId(id){
        this._id = id;
    },
    getName(){
        return this._name;
    },
    setName(name){
        this._name = name;
    }
};

let myObj7 = {
    _id: 0,
    _name: "",
    get id(){
        return this._id;
    },
    set id(id){
        this._id = id;
    },
    get name(){
        return this._name;
    },
    set name(name){
        this._name = name;
    }
};

myObj6.setId('S001');
myObj6.setName('Kasun');
console.log("ID:", myObj6.getId());
console.log("Name:", myObj6.getName());

console.log("-------------------");

myObj7.id = 'S002';
myObj7.name = 'Ruwan';
console.log("ID:", myObj7.id);
console.log("Name:", myObj7.name);

console.log("-------------------");

let myObj8 = {
    email: 'dep@ijse.lk',
    address: 'panadura'
};

/* Property Accessor:  Dot Notation */
console.log(myObj8.email);
console.log(myObj8.address);

/* Property Accessor:  Bracket Notation */
console.log(myObj8['email']);
console.log(myObj8['address']);

myObj8['contact'] = '078-1234567';
console.log(myObj8.contact);







