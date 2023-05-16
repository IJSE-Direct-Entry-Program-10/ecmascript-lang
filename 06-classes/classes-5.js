/* Class Expression */

let MyClass = class {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    print(){
        console.log(this.id, this.name);
    }
}

new MyClass(1, 'Suranga').print();