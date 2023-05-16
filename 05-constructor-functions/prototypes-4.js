function abstractFn() {
    throw new Error("Not implemented yet");
}

function User(username, password) {
    if (new.target) throw new Error("Abstract constructors can't be instantitated with out implementing");
    if (this == globalThis) throw new Error("Abstract constructors can be invoked only via sub class constructors");

    this.username = username;
    this.password = password;
}

User.prototype.login = abstractFn;
User.prototype.logout = abstractFn;

User.prototype.SOME_RANDOM_INT = parseInt(Math.random() * 10);

/* If the property is final */
const descriptor = Object.getOwnPropertyDescriptor(User.prototype, 'SOME_RANDOM_INT');
descriptor.writable = false;
Object.defineProperty(User.prototype, 'SOME_RANDOM_INT', descriptor);

function Employee(username, password) {
    if (new.target) throw new Error("Abstract constructors can't be instantitated with out implementing");
    if (this == globalThis) throw new Error("Abstract constructors can be invoked only via sub class constructors");
    User.call(this, username, password);
}

Employee.prototype.login = function () {
    console.log("Employee logged in");
}

Employee.prototype.logout = function () {
    console.log("Employee logged out");
}

Employee.prototype.sendEmails = abstractFn;

Object.setPrototypeOf(Employee.prototype, User.prototype);

function Manager(username, password) {
    if (!new.target) throw new Error("Constructor functions should be invoked with the new operator");
    Employee.call(this, username, password);
}

Manager.prototype.sendEmails = function () {
    console.log("Manager is sending emails");
}

Object.setPrototypeOf(Manager.prototype, Employee.prototype);

function Assistant(username, password) {
    if (!new.target) throw new Error("Constructor functions should be invoked with the new operator");
    Employee.call(this, username, password);
}

Assistant.prototype.sendEmails = function () {
    console.log("Asisstant is sending emails");
}

Object.setPrototypeOf(Assistant.prototype, Employee.prototype);

console.log("-----------------------------");

let emp = new Manager();
emp.login();
emp.sendEmails();
emp.logout();