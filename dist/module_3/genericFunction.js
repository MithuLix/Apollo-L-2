"use strict";
const createArray = (param) => {
    return [param];
};
const createArray1 = (param1, param2) => {
    return [param1, param2];
};
function createArray2(param1, param2) {
    return [param1, param2];
}
const result1 = createArray1("Bangladesh", "country");
const result2 = createArray1(false, ["usa"]);
const result3 = createArray1({ name: "bangla" }, false);
///spread operator
const createMeIntoSpread1 = (myInfo) => {
    const spread1 = 'kaha ka';
    const newData = Object.assign(Object.assign({}, myInfo), { spread1 });
    return newData;
};
const myInfo = {
    name: "persinax",
    age: 20,
    salary: 2555500
};
const result5 = createMeIntoSpread1(myInfo);
