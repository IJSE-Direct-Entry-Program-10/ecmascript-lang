function Vehicle(regNum, vin){
    if (new.target) throw new Error ("Abstract class can't intansiate via constructor");
    if (this === globalThis) throw new Error("Constructor function is not allowed to invoke without new operator");

    this.regNum = regNum;
    this.vin = vin;
}

Vehicle.prototype.drive = abstractFn;
Vehicle.prototype.applyBreaks = abstractFn;
Vehicle.prototype.shiftGears = abstractFn;
Vehicle.prototype.horn = abstractFn;

function abstractFn(){
    throw new Error("Yet to implement");
}

function Car(regNum, vin){
    if (new.target) throw new Error ("Abstract class can't intansiate via constructor");
    if (this === globalThis) throw new Error("Constructor function is not allowed to invoke without new operator");    
    Vehicle.call(this, regNum, vin);
}

Car.prototype.absImpl = abstractFn;

/* Car extends Vehicle */
Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

function Prius(regNum, vin){
    if (!new.target) throw new Error ("Constructor fucntions should be invoked with the new operator");
    Car.call(this, regNum, vin);
}

Prius.prototype.drive = function(){
    console.log("Prius is driving");
}

Prius.prototype.applyBreaks = function(){
    console.log("Prius is applying breaks");
}

Prius.prototype.shiftGears = function(){
    console.log("Prius is shifting gears");
}

Prius.prototype.horn = function(){
    console.log("Prius is horning");
}

Prius.prototype.absImpl = function(){
    console.log("Pirus is applying advanced breaking system");
}

/* Prius extends Car */
Object.setPrototypeOf(Prius.prototype, Car.prototype);

function Bugati(regNum, vin){
    if (!new.target) throw new Error ("Constructor fucntions should be invoked with the new operator");
    Car.call(this, regNum, vin);
}

Bugati.prototype.drive = function(){
    console.log("Bugati is driving");
}

Bugati.prototype.applyBreaks = function(){
    console.log("Bugati is applying breaks");
}

Bugati.prototype.shiftGears = function(){
    console.log("Bugati is shifting gears");
}

Bugati.prototype.horn = function(){
    console.log("Bugati is horning");
}

Bugati.prototype.absImpl = function(){
    console.log("Bugati is applying advanced breaking system");
}

/* Bugati extends Car */
Object.setPrototypeOf(Bugati.prototype, Car.prototype);

function Townace(regNum, vin){
    if (this === globalThis) throw new Error("Constructor function is not allowed to invoke without new operator");    
    Vehicle.call(this, regNum, vin);
}

Townace.prototype.drive = function(){
    console.log("Townace is driving");
}

Townace.prototype.applyBreaks = function(){
    console.log("Townace is applying breaks");
}

Townace.prototype.shiftGears = function(){
    console.log("Townace is shifting gears");
}

Townace.prototype.horn = function(){
    console.log("Townace is horning");
}

/* Townace extends Vehicle */
Object.setPrototypeOf(Townace.prototype, Vehicle.prototype);

const t1 = new Bugati();
t1.horn();
t1.applyBreaks();
t1.drive();
t1.shiftGears();
t1.absImpl();