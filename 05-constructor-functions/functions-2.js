/* How to identify constructor functions?
 * 1. Identifer is a noun   
 * 2. Just like in classes, identifer starts with UpperCase letter
*/

/*  
    Falsy
    0, -0, 0n
    empty string
    undefined
    null
    false
    NaN
*/

function Student(id, name, address){
    if (!new.target) throw new Error('This is a constructor function');
    this.id = id;
    this.name = name;
    this.address = address;

    this.printDetails = function (){
        console.log(this.id, this.name, this.address);
    }
}

let s1 = new Student(1, 'Kasun', 'Galle');
let s2 = new Student(2, 'Ruwan', 'Matara');
let s3 = new Student(3, 'Supun', 'Panadura');

s1.printDetails();
s2.printDetails();
s3.printDetails();