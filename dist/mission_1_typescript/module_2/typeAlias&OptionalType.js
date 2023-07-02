"use strict";
const crush1 = {
    name: "moina pakhi",
    age: 33,
    profession: "Web developer",
    address: "rangpur"
};
const crush2 = {
    name: "tia pakhi",
    age: 33,
    profession: "Web developer",
    address: "dhaka"
};
const isCrushMarried = false;
const courseNameType = "next level web development";
const calculate = (number1, number2, operation) => {
    return operation(number1, number2);
};
calculate(43, 43, (x, y) => x + y);
calculate(43, 43, (x, y) => x - y);
calculate(43, 43, (x, y) => x * y);
