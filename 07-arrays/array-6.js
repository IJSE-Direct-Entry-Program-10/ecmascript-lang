class Employee {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

// const employees = [];
// const empIds = [1,2,3,4,5].map(v => 'E00' + v);
// const empNames = ['Kasun', 'Supun', 'Upul', 'Ruwan', 'Nuwan'];

// for(let i = 0; i < empIds.length; i++){
//     employees.push(new Employee(empIds[i], empNames[i]));
// }

const employees = [1, 2, 3, 4, 5, 6]
        .map((value, i) => 
            new Employee(`E00${value}`, 
            ['Kasun', 'Supun', 'Upul', 'Upul', 'Ruwan', 'Nuwan'].at(i))
        );

const empObj = employees.find(value => value.name == 'Upul');
console.log(empObj);

const index = employees.findIndex(value => value.name == 'Upul');
console.log(index);

const lastIndex = employees.findLastIndex(value => value.name == 'Upul');
console.log(lastIndex);
