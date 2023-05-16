function Super(){
    console.log("Super()");
}

Super.prototype.myMethod = function (){
    console.log("Super's myMethod()");
}

Super.prototype.superMethod = function(){
    console.log("Super's superMethod()");
}

function Sub(){
    /* We usually add this validation to leaf constructors */
    if (!new.target) throw new Error('Constructor functions should be invoked with the new operator');
    Super.call(this);
    console.log("Sub()");
}

Sub.prototype.myMethod = function (){
    console.log("Sub's Method()");
}

Super.prototype.subMethod = function(){
    console.log("Sub's subMethod()");
}

// Object.setPrototypeOf(sub-prototype, suber-prototype)
// Sub.prototype.__proto__ = Super.prototype; (debugging)
// sub.prototype extends super.prototype
Object.setPrototypeOf(Sub.prototype, Super.prototype);

const s1 = new Sub();

// console.log(s1.__proto__);
console.log(Object.getPrototypeOf(s1));