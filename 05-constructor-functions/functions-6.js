function Employee(id, name, address){
    this.id = id;
    this.name = name;
    this.address = address;
}

Employee.prototype.printDetails = function(){
    console.log(this.id, this.name, this.address);
}

Employee.prototype.toString = function(){
    return `Employee(id=${this.id}, name=${this.name}, address=${this.address})`;
}

// [x = Obj] + Employee.call(x, 1, 'Kasun Sampath, 'Galle') + Return x;
let e1 = new Employee(1, 'Kasun Sampath', 'Galle');
let e2 = new Employee(2, 'Ruwan', 'Mahargama');
let e3 = new Employee(3, 'Supun', 'Matara');

e1.printDetails();
e2.printDetails();
e3.printDetails();