this.x = 10;

function print(){
    console.log(this == globalThis);
    console.log(this.x);
}

this.print = print;
this.print();

// console.log("------------");
// console.log(this);
// console.log(globalThis);