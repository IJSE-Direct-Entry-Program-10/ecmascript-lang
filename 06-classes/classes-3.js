class Animal {
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(`name=${this.name}, age=${this.age}`);
    }
}

class Dog extends Animal {
    constructor (name, age){
        super(name, age);
    }

    print() {
        console.log("I am bawwek..!");
        super.print();
    }
}

let d1 = new Dog('Yankatha', 2);
d1.print();

class Cat extends Animal {

    constructor(name, age){
        super(name, age);
    }

    print() {
        console.log("I am yanweak..!");
        console.log(`name=${super.name}, age=${this.age}`);
    }
}

let c1 = new Cat('Garfield', 1);
c1.print();
console.log(c1);
