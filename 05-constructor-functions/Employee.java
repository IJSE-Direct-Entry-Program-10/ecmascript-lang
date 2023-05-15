class People extends Object{
	String name;
	int age;
	
	People(String name, int age){
		super();
		this.name = name;
		this.age = age;
	}
	void print(){
		System.out.println(this.name + " " + this.age);
	}
	
	String getName() { return this.name; }
	int getAge() { return this.age; }
}

class Employee extends People {
	String empId;
	String department;
	
	Employee(String empId, String name, int age, String department){
		super(name, age);
		this.empId = empId;
		this.department = department;
	}
	
	void print(){
		System.out.println(empId + "," + getName() + "," + getAge() + "," + department);
	}
	
	String getEmpId(){ return this.empId; }
	
	String getDepartment(){ return this.department; }
}

/* Employee instance should have following properties,
 * 1. empId
 * 2. name          [inherited from People Class]
 * 3. age           [inherited from People Class]
 * 4. department
 */

 /* Employee instance should have following methods,
  * 1. getEmpId()
  * 2. getName()    [inherited from People class]
  * 3. getAge()     [inherited from People Class]
  * 4. getDepartment()
  * 5. print()      [overridden method]
  */

  /* Employee instantce (e1) should full fill following conditions
   * e1 instanceof Employee == true
   * e1 instanceof People == true
   * e1 instanceof Object == true
   */

  /* People's constructor body should be executed before the Employee consturctor body
   */