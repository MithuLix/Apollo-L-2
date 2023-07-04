"use strict";
function add(num1, num2) {
    return num1 + num2;
}
add(23, 32);
const arrowFunction = (num1, num2) => num1 + num2;
// callback function
const arr = [2, 213, 43, 324, 21];
const newArray = arr.map((element) => element * element);
console.log(newArray);
const person = {
    name: "mezba",
    balance: 44,
    addBalance(money) {
        console.log(`my new balance is ${this.balance + money}`);
    }
};
