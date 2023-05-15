function Name(firstName, lastName){
    if (!new.target) throw new Error("Constructor functions should be invoked with the new operator");
    this.firstName = firstName;
    this.lastName = lastName;
}

function Customer(id, firstName, lastName, address){
    if (!new.target) throw new Error("Constructor functions should be invoked with the new operator");
    this.id = id;
    this.name = new Name(firstName, lastName);
    this.address = address;

    this.printDetails = function(){
        console.log(this.id, this.name, this.address);
    }
}

let c1 = new Customer(1, 'Kasun', 'Sampath', 'Galle');
console.log(c1 instanceof Customer);
console.log(c1 instanceof Name);
console.log(c1 instanceof Object);