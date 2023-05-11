let customer = {};
customer.id = 'C001';
customer.name = 'Kasun';
customer.address = 'Galle';

let id = 'C003';

// Ordinary Functions (non-lexical this)
// Lambda Functions (lexical this)

customer.print = function () {
    console.log(this == customer);  // true
    console.log(this.id, this.name, this.address);
};

this.id = 'C002';
this.name = 'Ruwan';
this.address = 'Pandura';

customer.print = () => {
    // console.log(this == customer);  // true
    console.log(this.id, this.name, this.address);    
    // console.log(customer.id, customer.name, customer.address);
};
customer.print();
