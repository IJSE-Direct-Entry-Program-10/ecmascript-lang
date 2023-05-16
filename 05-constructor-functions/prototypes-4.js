function abstractFn(){
    throw new Error("Not implemented yet");
}

function User(username, password){
    if (new.target) throw new Error("Abstract constructors can't be instantitated with out implementing");
    if (this == globalThis) throw new Error("Abstract constructors can be invoked only via sub class constructors");

    this.username = username;
    this.password = password;
}

User.prototype.login = abstractFn;
User.prototype.logout = abstractFn;

User.prototype.SOME_RANDOM_INT = parseInt(Math.random() * 10);

function Employee(username, password){
    if (new.target) throw new Error("Abstract constructors can't be instantitated with out implementing");
    if (this == globalThis) throw new Error("Abstract constructors can be invoked only via sub class constructors");    
    User.call(this, username, password);
}

Object.setPrototypeOf(Employee.prototype, User.prototype);

function Manager(username, password){
    if (!new.target) throw new Error("Constructor functions should be invoked with the new operator");
    Employee.call(this, username, password);
}

Object.setPrototypeOf(Manager.prototype, Employee.prototype);

function Assistant(username, password){
    if (!new.target) throw new Error("Constructor functions should be invoked with the new operator");
    Employee.call(this, username, password);
}

Object.setPrototypeOf(Manager.prototype, Employee.prototype);