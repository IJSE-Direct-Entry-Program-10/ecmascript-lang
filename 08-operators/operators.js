// void <valid js expression>
let result = void (10 + 15);
console.log(result);

let eval;

result = void (eval=(10 + 10));
console.log(eval);
console.log(result);

console.log("-----------------");

/* exponent operator */
console.log(2 ** 3);    // 2 x 2 x 2
console.log(5 ** 2);    // 5 x 5

let student = {
    id: 'S001',
    name: 'Kasun',
    address: 'Galle'
};

student = null;

/* Optional Chaining = Safe Navigator */

console.log(student?.id);

if (student?.name == 'Kasun'){
    console.log(student.name.toUpperCase());
}

let x = 10;
let y = "10";

/* equality checks only the value */
/* strict equality checks value + data type */

console.log(x == y);
console.log(x === y);

console.log(null == undefined);
console.log(null === undefined);

console.log("----------------");
console.log("Falsy");

console.log('0 == false', 0 == false);
console.log('-0 == false', -0 == false);
console.log('0.0 == false', 0.0 == false);
console.log('0n == false', 0n == false);
console.log('"" == false', "" == false);
console.log('false == false', false == false);
console.log();
console.log('null == false', null == false);
console.log('undefined == false', undefined == false);
console.log('NaN == false', NaN == false);

console.log("----------------");
console.log("Truthy");

console.log('1 == true', 1 == true);
console.log('1n == true', 1n == true);
console.log('"1" == true', "1" == true);
console.log('true == true', true == true);
console.log();
console.log('1.25 == true', 1.25 == true);
console.log('5n == true', 5n == true);
console.log('10 == true', 10 == true);
console.log('-1 == true', -1 == true)
console.log('"Something" == true', "Something" == true);
console.log('Infinity == true', Infinity == true);
console.log('-Infinity == true', -Infinity == true);
console.log('{} == true', {} == true);
console.log('[] == true', [] == true);
console.log('"0.0" == true', "0.0" == true);

console.log("------------------");

if (1 == true){
    console.log("abc is truthy");
}else{
    console.log("abc is falsy");
}

/* Turthy doesn't always mean true */
/* Falsy doesn't always mean false */