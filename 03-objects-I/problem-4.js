let student = {};
student.id = 'S001';
student.name = 'Ruwan';

let customer = {};
customer.id = 'C001';
customer.name = 'Kasun';
customer.print = print.bind(student);

function print(){
    console.log(this.id, this.name);
}

customer.print();
customer.print.call(customer);

// customer.print = print;
// student.print = print;

// customer.print();
// customer.print.call(student);
// customer.print.apply(student);
// student.print();