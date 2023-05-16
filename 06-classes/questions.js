/* function Customer(id, name){
    this.id = id;
    this.name = name;
}

Customer.prototype.print = function (){
    console.log(this.id, this.name);
} */

class Customer {
    constructor (id, name){
        this.id = id;
        this.name = name;
    }

    static print() {
        console.log("Static Method");
    }

    static{
        console.log("Customer Static Initailizer");
    }
}
