function Customer(id, name){
    this.id = id;
    this.name = name;
}

console.log(Customer.prototype.constructor == Customer);

let c1 = new Customer(1, 'Kasun');
// console.log(c1.__proto__ == Customer.prototype);
// c1.__proto__ = null;
// console.log(c1 instanceof Customer);
// console.log(c1 instanceof Object);
// console.log(c1.__proto__.__proto__.constructor == Object);
// console.log(c1.__proto__.__proto__.__proto__);

console.log(c1.__proto__.constructor.__proto__.__proto__ == c1.__proto__.__proto__);
console.log(c1.__proto__.constructor.__proto__ == Function.__proto__);
// console.log(c1.__proto__.constructor.__proto__.constructor);
// console.log(Customer instanceof Function);
// console.log(Object instanceof Function);
// console.log(Object.__proto__ == Customer.__proto__);

// console.log(Object.prototype.constructor == Object);
// [[Construct]] = {(x = Create a new Object) + [[Call]](x,arg..)};
// console.log(c1.id);
// console.log(c1.name);

// let c2 = new Customer(2, 'Ruwan');
// console.log(c2);
// console.log(globalThis.id);
// console.log(globalThis.name);