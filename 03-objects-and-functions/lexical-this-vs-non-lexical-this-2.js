let s001 = {};
s001.id = 's001';
s001.name = 'Kasun';
s001.address = 'Panadura';

let myFun = () => {
    console.log(this.id, this.name, this.address);
};

s001.print = function (){
    return myFun;
};

// let newFun = s001.print();
// console.log(newFun);
// newFun();

(s001.print())();
s001.print()();