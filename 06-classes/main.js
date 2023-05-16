// function Customer(id, name, address){
//     this.id = id;
//     this.name = name;
//     this.address = address;
// }

// Customer.prototype.print = function (){
//     console.log(this.id, this.name, this.address);
// }

let c1 = new Customer(1, 'Kasun', 'Galle');

class Customer {
    id;
    #name;
    #address;

    constructor (id, name, address){
        this.id = id;
        this.#name = name;
        this.#address = address;
    }

    print() {
        this.#printInternal();
    }

    #printInternal(){
        console.log(this.id, this.#name, this.#address);
    }
}

/* Constructor functions are var declarations */
/* Classes are lexical declarations (TDZ) */