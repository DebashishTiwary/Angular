"use strict";
class Employee {
    //constructor(){}
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    ;
    getinformation() {
        //return this.name+" "+this.address;
        return `${this.name} stays at ${this.address}`;
    }
}
// let debashish=new Employee();
// debashish.id=1;
// debashish.name="Debashish";
// debashish.address="Google,Banglore"
// console.log(debashish);
let emp = new Employee(1, "Akshit", "Mumbai");
console.log(emp);
console.log(emp.getinformation());
