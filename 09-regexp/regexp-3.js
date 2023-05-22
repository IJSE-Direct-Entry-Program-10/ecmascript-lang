const regExp = /((E)(\d{3}))/g;
const text = "Heshan's id is E003 and he is a good employee";
const result = regExp.exec(text);
console.log(result);
console.log(result[0]);
console.log(result['index']);

console.log("---------------------");

                /* /api/v1/customers/C\d{3} */
const apiRegExp = /(.+)\/api\/v1\/customers\/(C\d{3})$/;
const url1 = 'https://ijse.lk/api/v1/customers/C005';
const url2 = 'https://ijse.lk/api/v1/items/I001';

// console.log(apiRegExp.test(url1));
const res = apiRegExp.exec(url1);
console.log(res);

console.log("-----------------------");

const contactRegExp = /((\d{3})-(\d{7}))/;
const myText = "Contact number is 077-1234567";

// console.log(contactRegExp.test(myText));
const myTextResult = contactRegExp.exec(myText);
console.log(myTextResult[0])
