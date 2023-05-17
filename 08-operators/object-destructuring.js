let student = {
    id: 'S001',
    name: {
        firstName: 'Kasun',
        lastName: 'Sampath'
    },
    address: {
        no: '#2',
        street: 'Grace Peries Road',
        city: 'Panadura',
        country: 'Sri Lanka'
    },
    employmenet: undefined,
    contacts: ['011-1234567', '055-1234567', '038-1234567']
}

let { address: studentAddress,
    id: studentId,
    ...rest } = student;
console.log(studentAddress);
console.log(studentId);
console.log("----------------");
console.log(rest);
console.log("----------------");

let { employmenet: emp = 'ijse' } = student;
console.log(emp);

let { address: { street, country } } = student;
// let {street, country} = adr;
// console.log(adr);

// let {address: {
//     street, country
// }} = student;

console.log(street);
console.log(country);

let { contacts: [, phone] } = student;
console.log(phone);

let studentName;

({ name: studentName } = student);

console.log(studentName);

// let x;
// [x] = [1,2,3];
// console.log(x);