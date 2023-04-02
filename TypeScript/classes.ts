class Employee{
    // id!:number;
    // name!:string;
    // address!:string; ! dont give errors

    id:number;
    name:string;
    address:string;

    //constructor(){}
    constructor(id:number,name:string,address:string){
        this.id=id;
        this.name=name;
        this.address=address;
    };

    getinformation():string{
        //return this.name+" "+this.address;
        return `${this.name} stays at ${this.address}`
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