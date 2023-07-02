"use strict";
function kgToGram(param) {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The Converted value is: ${value} grams`;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return value;
    }
}
const resultToBeNumber = kgToGram(333);
const resultToBeString = kgToGram('4334');
console.log(resultToBeNumber);
console.log(resultToBeString);
try {
}
catch (error) {
    console.log(error.message);
}
