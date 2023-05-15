class Animal {
    String name;

    public Animal(String name){
        this.name = name;
    }

    public void walk(){
        System.out.println(name + " is walking");
    }
}

class Dog extends Animal {

    public Dog(String name){
        super(name);
    }

    public void bark(){
        System.out.println(name + ": baw... baw...!");
    }
}

class Cat extends Animal {

    int age;

    public Cat(String name, int age){
        super(name);
        this.age = age;
    }

    int getAge(){
        return this.age;
    }

    public void walk() {
        System.out.println(name + " cat walking");
    }
}