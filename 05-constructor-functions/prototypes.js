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
    Super.call(this);
    console.log("Sub()");
}

Sub.prototype.myMethod = function (){
    console.log("Sub's Method()");
}

Super.prototype.subMethod = function(){
    console.log("Sub's subMethod()");
}

Sub.prototype.__proto__ = Super.prototype;

const s1 = new Sub();

console.log("Is s1 instance of the Sub?", 
            s1 instanceof Sub);
console.log(isInstance(s1, Sub));
console.log("Is s1 instance of the Super?",
            s1 instanceof Super);
console.log(isInstance(s1, Super));
console.log(isInstance(s1, Object));

/*  [s1 instanceof Sub] = [s1.__proto__ == Sub.prototype] */

/* This is how instanceof operator works */
function isInstance(instance, constructorFn){
    let prototype = instance.__proto__;
    while (prototype != null){
        if (prototype == constructorFn.prototype) return true;
        prototype = prototype.__proto__;
    }
    return false;
}