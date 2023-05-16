// function abstractFn(){
//     throw new Error("Not implemented yet!");
// }

// /* Abstract Class */
// function Vehicle(regNum){
//     if (new.target) throw new Error("Abstract classes can't be instantiated");
//     if (this === globalThis) throw new Error("Constructor functions should be invoked with new operator");
//     this.regNum = regNum;
//     console.log("Vehicle()");
// }

// Vehicle.prototype.drive = abstractFn;
// Vehicle.prototype.applyBreaks = abstractFn;

// /* Conceret Class */
// function Car(regNum){
//     if (this === globalThis) throw new Error("Constructor functions should be invoked with new operator");
//     Vehicle.call(this, regNum);
//     console.log("Car()");
// }

// Car.prototype.dirve = function () {
//     console.log("Car is driving");
// }

// Car.prototype.applyBreaks = function () {
//     console.log("Car is applying breaks");
// }

// Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

class Vehicle {
    constructor (regNum){
        this.regNum = regNum;
    }

    drive() {
        throw new Error("Not implemented yet!");
    }

    applyBreaks() {
        throw new Error("Not implemented yet!");
    }
}

class Car extends Vehicle {
    constructor (regNum){
        super(regNum);
    }

    drive() {
        console.log("Car is driving...!");
    }

    applyBreaks(){
        console.log("Car is applying some breaks");
    }
}

let prius = new Car('123456');
prius.drive();
prius.applyBreaks();