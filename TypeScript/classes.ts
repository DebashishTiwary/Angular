class Employee{
    // id!:number;
    // name!:string;
    // address!:string; ! dont give errors

    #id:number; //#-privvate
    protected name:string;
    address:string;
    get empId():number{
        return this.#id;
    }
    set empId(id:number){
        this.#id=id;
    }
static getEmployeeCount():number{
    return 50;
}

    //constructor(){}
    constructor(id:number,name:string,address:string){
        this.#id=id;
        this.name=name;
        this.address=address;
    };

    getinformation():string{
        //return this.name+" "+this.address;
        return `${this.name} stays at ${this.address}`
    }
    

}
console.log(Employee.getEmployeeCount());
class manager extends Employee{
    constructor(id:number,name:string,address:string){
        super(id,name,address);
    }
    getinformation(): string {
        return `${this.name} is manager at ${this.address}`
    }
   
}
// let debashish=new Employee();
// debashish.id=1;
// debashish.name="Debashish";
// debashish.address="Google,Banglore"
// console.log(debashish);
let emp=new Employee(1,"Akshit","Mumbai");
console.log(emp);
console.log(emp.getinformation()); 

console.log("Id-"+emp.empId);//used getter method
emp.empId=100//used setter method
console.log("Id-"+emp.empId);//used getter method

let mang1=new manager(1,"Surya","Facebook");
console.log(mang1.getinformation());





