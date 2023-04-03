"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
class Employee {
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    static getEmployeeCount() {
        return 50;
    }
    //constructor(){}
    constructor(id, name, address) {
        // id!:number;
        // name!:string;
        // address!:string; ! dont give errors
        _Employee_id.set(this, void 0); //#-privvate
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    ;
    getinformation() {
        //return this.name+" "+this.address;
        return `${this.name} stays at ${this.address}`;
    }
}
_Employee_id = new WeakMap();
console.log(Employee.getEmployeeCount());
class manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getinformation() {
        return `${this.name} is manager at ${this.address}`;
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
console.log("Id-" + emp.empId);
emp.empId = 100;
console.log("Id-" + emp.empId);
let mang1 = new manager(1, "Surya", "Facebook");
console.log(mang1.getinformation());
//Getters and Setters
