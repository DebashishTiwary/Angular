//funtions
//different ways to write funtion
//generic funtion,optional parameters,required parameters,rest parameters
function add(num1:number,num2:number){
    return num1+num2;
}


//let key:number=77;

function binarySearch(array2:number[],key:number){
    let i:number=0;
let j:number=array2.length-1;
while(i<j){
    let m:number=Math.floor((i+j)/2);
    //console.log(m);
    if(array2[m]===key)
    {
        return m;
    }
    else if(array2[m]<key)
    j=m-1;
    else
    i=m+1;
}
return "Not Present";
}
let array2:number[];
array2=[99,77,11,9,3,0,-3,-7]
 //console.log(binarySearch(array2,0));
//type 2
const sub = (num1: number,num2: number):number=>num1-num2;
//console.log(sub(7,17));
//type 3
const mul=function(num1:number,num2:number):number{
    return num1*num2;
}
//console.log(mul(2,3));

//optional parameter
//? is if that particular thing exits.
function additon(num1:number,num2:number,num3?:number){
    return num3? num1+num2+num3 : num1+num2;
   // if num3 exist then num1+num2+num3 else num1+num2
}

//required parameter
const subtract=(num1:number,num2:number,num3=0):number=>num1-num2-num3;
//num 3 is any type agr zaroorat ho update krna hota hai

//rest parameter
const multiply=function(num1:number,num2:number,...num3:number[]):number{
    return num1*num2*num3.reduce((a,b)=>a+b,0);
}

//console.log(multiply(2,3,...[4,5,6]));
//console.log(multiply(2,3,4,5,6));

//Generic Funtions 
function getItem<T>(item: T[]):T[]{
    return new Array<T> ().concat(item);
}
let concatnumbers=getItem([1,2,3,4,5]);
let concatstring=getItem(["a","b","c","d","e"]);
console.log(concatnumbers+" "+concatstring);
