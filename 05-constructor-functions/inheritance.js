function People(name, age){
    this.name = name;
    this.age = age;
    console.log("People()");
}

People.prototype.print = function() {
    console.log(`People(name=${this.name}, age=${this.age})`);
}

People.prototype.getName = function() {
    return this.name;
}

People.prototype.getAge = function(){
    return this.age;
}

/* -------------------------------- */

function Employee(empId, name, age, department){
    People.call(this, name, age);
    this.empId = empId;
    this.department = department;
    console.log("Employee()");
}

Employee.prototype.print = function (){
    console.log(`Employee(id=${this.empId}, name=${this.getName()}, age=${this.getAge()},
                department=${this.department})`);
}

Employee.prototype.getEmpId = function() {
    return this.empId;
}

Employee.prototype.getDepartment = function (){
    return this.department;
}

Employee.prototype.__proto__ = People.prototype;

let e1 = new Employee('E001', 'Kasun Sampath', 25, 'IT');
console.log('e1 instanceof Employee = ', e1 instanceof Employee);       // true
console.log('e1 instanceof People = ', e1 instanceof People);           // true
console.log('e1 instanceof Object = ', e1 instanceof Object);           // true

console.log('getName' in e1 && typeof e1.getName == 'function');        // true
console.log('getAge' in e1 && typeof e1.getAge == 'function');          // true
console.log('name' in e1);                                              // true
console.log('age' in e1);                                               // true
// e1.print();
