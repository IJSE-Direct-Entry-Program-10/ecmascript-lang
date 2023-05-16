class Student {
    #id
    get id(){
        return 'something' + this.#id;
    }
    set id(id){
        console.log("Setter()");
        this.#id = id;
    }
    name;
    address;
    constructor(id, name, address){
        this.id = id;
        this.name = name;
        this.address = address;
    }
}

let s1 = new Student(1, 'Kasun', 'Galle');
console.log(s1.name);
console.log(s1.id);