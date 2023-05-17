let code = `
            function Customer(id, name, address){
                console.log(id, name, address);
            }
            `

eval(code);

Customer(1, 'Kasun', 'Galle');

let x = 10/0;
console.log(x);
console.log(isFinite(x));

let y = 10 + 'a';       // NaN (Not a Number)
x = 10;
console.log(isNaN(y));
console.log(isNaN(x));

console.log("============");

/* 
   Global isNaN(argument -> number)
   Number.isNaN(argment:number)
   Number.isNaN(Number(argument));
*/

x = "Kasun";    // NaN
console.log(isNaN(x));          // true
console.log(Number.isNaN(Number("10a")));   // false

try {
    let x = 'ijse';
    throw new Error("IJSE");
    console.log("ijse");
}catch(e){
    console.log(e);
}