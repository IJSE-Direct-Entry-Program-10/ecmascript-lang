const regExp1 = /is/g;
let text = "This is awesome!";
console.log("Is global?", regExp1.global);
console.log(regExp1.test(text), regExp1.lastIndex);
console.log(regExp1.test(text), regExp1.lastIndex);
console.log(regExp1.test(text), regExp1.lastIndex);
console.log(regExp1.test(text), regExp1.lastIndex);

console.log("----------------");

const regExp2 = /is/i;
text = 'Is he crazy? Yep';
console.log(regExp2.test(text));

console.log("----------------");

const regExp3 = /^.+is.+/gm;
text = `Welcome to Sri Lanka. It is awesome!
        Sri Lanaka is a beautiful place
        `;
console.log(regExp3.test(text), regExp3.lastIndex);
console.log(regExp3.test(text), regExp3.lastIndex);
console.log(regExp3.test(text), regExp3.lastIndex);