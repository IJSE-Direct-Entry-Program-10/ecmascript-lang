/* 
    Data Types (Basic = Primitive) 
    Literals
    Variables (var, let [ES6])
    Constants (legacy, const [ES6])    
    typeof Operator
    String Conversions
*/

/* boolean */
console.log(true, false);

/* number */
console.log(1025);
console.log(-1025);
console.log(10.35);
console.log(-10.35);
console.log(10.25e2);
console.log(10.25E-2);
console.log(0.3-0.2, "IEEE-754 (Just like Java, C#)");

console.log("-------------");

console.log(0b010);     // Binary
console.log(010);       // Octal (Legacy)
console.log(0o10);      // Octal (Recommended)
console.log(0xFF);      // Hexadecimal

console.log("-------------");
console.log(Infinity, (10/0));
console.log(-Infinity);
console.log(NaN, (10-'a'));       // Not a number

/* BigInt (2020 - ES11) */
/* Use only when it needs */
/* No fix bit-width */
/* Low peformance compare to number type */

console.log(BigInt(100000000225));
console.log(100000000225n);

console.log(0b100010101n);  // Binary
console.log(0o1025111n);    // Octal
console.log(0xFFFFn);       // Hexadecimal

console.log(10n + 10n);
/* Number to BigInt : BigInt(number) */
console.log(10n + BigInt(10));  // Result (BigInt)
/* BigInt to Number : Number(BigInt) */
console.log(Number(10n) + 10);  // Result (number)

console.log("-------------");

/* string */
console.log('This "is" a single quotted string');
console.log("This 'is' a double quotted string");
console.log(`
    This is a multi-line string
    This is also called "non-tagged template string"
    We can have some crazy ${10 + 15} shit here
    One more: ${(10 + 15) > 20}
    This technique is called "Text Interpolation"
    The syntax: \${valid js expression}
`);

/* null, undefined */
console.log(null);
console.log(undefined);
console.log(null == undefined);

/* Symbol (2015 - ES6) */

console.log(Symbol());          // Description = undefined
console.log(Symbol('ijse'));    // Description = ijse  
console.log(Symbol('ijse'));    // Description = ijse  
console.log(Symbol('a') == Symbol('a'));

console.log("-------------");

/* Variables */

var x;
console.log("x : ", x);
x = 10;
console.log("x : ", x);
x = "ijse";
console.log("x : ", x);
x = true;
console.log("x : ", x);

if (true) {
    var y = 10;
    console.log("y : ", y);
}

console.log("y : ", y);
var x = 20;
var y = "kasun";
console.log("x : ", x);
console.log("y : ", y);

/* 'let' does not allow re-declrations */
/* let x = 30; */

let name = "ijse";
{
    console.log("Entering the inner scope");
    //console.log(name);      // TDZ (Temporal Dead Zone)
    console.log('something');
    let name;
    console.log(name);
    name = "esoft";
    console.log(name);
    console.log("Exiting the inner scope");
}
console.log(name);

console.log("------------");

/* 1 */
let school = "ijse";
{
    school = "esoft";
}
console.log("First Result: ", school);    // esoft

console.log("------------");

/* 2 */
let school2 = "ijse";
{
    /* The inner scope's school2 will shadow (hide)
       the outer scope's school2 */
    let school2 = "esoft"; 
}
console.log("Second Result: ", school2);    // ijse

/* 3 */
/* `let` declrations can't be re-declared 
    as `var` declarations */
/* 
let school3 = "ijse";
{
    var school3 = "esoft";  // Error
}
console.log("Third Result: ", school3); 
*/

console.log("------------");

/* Constants */

/* Legacy (Correct) */
Object.defineProperty(globalThis, 'PI', {
    value: 3.14,
    writable: false,
    enumerable: false,
    configurable: false
});
PI = 45;                // ERROR ?
console.log(PI);

/* Legacy (Mostly used among developers) */
var DAYS_OF_WEEK = 7;
console.log(DAYS_OF_WEEK);

const NUM_OF_DAYS_IN_YEAR = 365;
/* NUM_OF_DAYS_IN_YEAR = 366;  // ERROR  */
console.log(NUM_OF_DAYS_IN_YEAR);

/* typeof Operator */
/* Syntax: typeof <valid js expression> : String */

let something = 10;
console.log(typeof something);
something = true;
console.log(typeof something);
something = 10n;
console.log(typeof something);
something = 'I am a string';
console.log(typeof something);
something = "I am a string";
console.log(typeof something);
something = `I am a non-tagged template string`;
console.log(typeof something);
something = 10.25;
console.log(typeof 10.25);
something = undefined;
console.log(typeof something);
something = Symbol();
console.log(typeof something);
something = null;
console.log(typeof something);  // this returns object instead of null
console.log(typeof DAYS_OF_WEEK);
console.log(typeof '10');
console.log(typeof (10 + 'ijse'));
console.log(typeof typeof 10);

console.log("------------");

/* String Conversions */

let str = "10.25";
console.log(typeof str)
let num1 = parseInt(str);
console.log(num1, typeof num1);
let num2 = parseFloat(str);
console.log(num2, typeof num2);
str = "10";
let num3 = BigInt(str);
console.log(num3, typeof num3);
str = "false";      // truthy 
console.log(str, typeof str);
let bool1 = Boolean(str);
console.log(bool1, typeof bool1);
str = "";           // falsy
console.log(str, typeof str);
let bool2 = Boolean(str);
console.log(bool2, typeof bool2);

let n = 10;
console.log(typeof n);
n += '';
console.log(typeof n);
n = true;
console.log(typeof n);
n += '';
console.log(typeof n);

console.log("------------");

let xyz = 10;
console.log(typeof xyz);
xyz = xyz.toString();
console.log(typeof xyz);
xyz = true;
console.log(typeof xyz);
xyz = xyz.toString();
console.log(typeof xyz);
// xyz = undefined;
// xyz = xyz.toString();
// console.log(typeof xyz);

xyz = 10.25;
console.log(xyz.toFixed(3));
console.log(typeof xyz);