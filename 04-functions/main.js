let background = 'dep';

// clouser = function + lexical env (surrounding state)

function Outer(something, i){
    let age = i;
    Outer.abc = 'ijse';
    return function () {
        console.log(Outer.abc);
        console.log(something);
        console.log(background);
        console.log(age);
    }
}

let inner1 = Outer('john', 10);
inner1();
background = 'dep-10';
Outer.abc = 'ijse-panadura';
console.log("--------------");
inner1();

let inner2 = Outer('meema', 20);
inner2();

console.log('----------------------');

function printSomething(id = 0, name, address = 'Panadura'){
    // address = (address == undefined) ? 'Panadura': address;
    // address = address ?? 'Panadura';
    console.log('id=', id, ', name=', name, ', address=', address);
}

printSomething(undefined, 'Kasun', 'Galle');