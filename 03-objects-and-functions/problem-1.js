globalThis.x = 10;             // Local Varaible

function print(){
    let x = 20;
    console.log(x);
    console.log(this.x);
}

print();