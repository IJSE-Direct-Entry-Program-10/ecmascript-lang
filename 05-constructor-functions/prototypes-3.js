function Vehicle(regNum, vin){
    if (new.target) throw new Error ("Abstract class can't intansiate via constructor");
    if (this === globalThis) throw new Error("Constructor function is not allowed to invoke without new operator");
}


function Car(regNum, vin){
    if (new.target) throw new Error ("Abstract class can't intansiate via constructor");
    if (this === globalThis) throw new Error("Constructor function is not allowed to invoke without new operator");    
    Vehicle.call(this, regNum, vin);
}

/* Car extends Vehicle */
Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

function Prius(regNum, vin){
    if (!new.target) throw new Error ("Constructor fucntions should be invoked with the new operator");
    Car.call(this, regNum, vin);
}

/* Prius extends Car */
Object.setPrototypeOf(Prius.prototype, Car.prototype);

function Bugati(regNum, vin){
    if (!new.target) throw new Error ("Constructor fucntions should be invoked with the new operator");
    Car.call(this, regNum, vin);
}

/* Bugati extends Car */
Object.setPrototypeOf(Bugati.prototype, Car.prototype);

function Townace(regNum, vin){
    if (this === globalThis) throw new Error("Constructor function is not allowed to invoke without new operator");    
    Vehicle.call(this, regNum, vin);
}

/* Townace extends Vehicle */
Object.setPrototypeOf(Townace.prototype, Vehicle.prototype);
