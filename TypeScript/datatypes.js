"use strict";
//let lname='John'
//lname=10
let lname = 'Debashish';
console.log(lname);
let newname = lname.toUpperCase();
console.log(newname);
let num = 20;
console.log(num);
//num='10'(wont be accepting)
let updatenumber = Math.pow(num, 2);
console.log(updatenumber);
updatenumber = updatenumber + 0.5;
console.log(updatenumber);
let isValid;
//console.log(isValid); default koi value nhi leta ,so you have to assign
isValid = true;
console.log(isValid);
let array;
let array1;
array = [1, 2, 3, 4, 5];
array1 = ["Debashish", "Subhasish", "Tiwary"];
let result = array.filter((num) => num > 2);
console.log(result);
let getperson = array1.find((getperson) => getperson === "Debashish");
console.log(getperson);
let sum = array.reduce((accumulator, currentvalue) => accumulator + currentvalue);
console.log(sum);
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Blue;
//tuples
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs[0] + " " + swapNumbs[1]);
