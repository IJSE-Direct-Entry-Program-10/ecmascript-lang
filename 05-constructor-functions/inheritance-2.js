function Animal(name){
    this.name = name;
}

Animal.prototype.walk = function(){
    console.log(`${this.name} is walking`);
}

function Dog(name){
    Animal.call(this, name);    // super()
}

Dog.prototype.bark = function() {
    console.log(`${this.name}: baw.. baw...!`);
}

// extending
Dog.prototype.__proto__ = Animal.prototype;

function Cat(name, age){
    Animal.call(this, name);    // super()
    this.age = age;
}

Cat.prototype.getAge = function () {
    return this.age;
}

Cat.prototype.walk = function () {
    console.log(`${this.name}: cat walking...!`);
}

// extending
Cat.prototype.__proto__ = Animal.prototype;

let dog1 = new Dog('Bawwa');
let cat1 = new Cat('garfiled', 12);

dog1.bark();
dog1.walk();

cat1.walk();
console.log(cat1.getAge());

console.log(dog1 instanceof Dog);       // true;
console.log(cat1 instanceof Dog);       // false;
console.log(dog1 instanceof Animal);    // true;
console.log(cat1 instanceof Animal);    // true;
console.log(dog1 instanceof Object);    // true;
console.log(cat1 instanceof Object);    // true;