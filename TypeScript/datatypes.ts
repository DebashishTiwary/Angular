//let lname='John'
//lname=10
let lname:string='Debashish';
console.log(lname)
let newname=lname.toUpperCase();
console.log(newname)

let num:number=20;
console.log(num)
//num='10'(wont be accepting)
let updatenumber=Math.pow(num,2)
console.log(updatenumber)
updatenumber=updatenumber+0.5;
console.log(updatenumber)

let isValid:boolean;
//console.log(isValid); default koi value nhi leta ,so you have to assign


isValid=true
console.log(isValid)

let array:number[];
let array1:Array<string>;
array=[1,2,3,4,5];
array1=["Debashish","Subhasish","Tiwary"];
let result=array.filter((num)=>num>2)
console.log(result)
let getperson=array1.find((getperson)=>getperson==="Debashish");
console.log(getperson);
let sum=array.reduce((accumulator,currentvalue)=>accumulator+currentvalue);
console.log(sum);

//enum
enum Color{
    Red,
    Green,
    Blue
}
let c: Color = Color.Blue;


//tuples
let swapNumbs: [firstNumber: number,secondNumber: number];
function swapNumbers(num1:number,num2:number):[number,number]{
    return [num2,num1]
}
swapNumbs=swapNumbers(10,20);
console.log(swapNumbs[0]+" "+swapNumbs[1]);

//any(takes and updates value of any type of variable)
let department :any;
department="Computer Science";
department=10;
//genrally dont try to use any




