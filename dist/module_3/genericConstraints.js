"use strict";
const constraintsVar = (getInfo) => {
    const women = 'kate kate';
    const newData = Object.assign(Object.assign({}, getInfo), { women });
    return newData;
};
const getInfo = {
    name: "perssa",
    age: 243,
    salary: 4354352,
    other1: false,
    other2: null,
};
const constraintResult = constraintsVar(getInfo);
console.log(constraintResult);
