class Super {
    static SOME_RANDOM_NUMBER = Math.random();

    static {
        console.log("Super Class");
    }

    constructor(){
        console.log("Super()");
    }
}

class Sub extends Super {
    static {
        console.log("Sub Class Static Initializer 1");
    }

    constructor(){
        super();
        console.log("Sub");
    }

    static {
        console.log("Sub Class Static Initializer 2");
    }

    static print(){
        console.log(super.SOME_RANDOM_NUMBER);
    }
}

// new Sub().print();
Sub.print();