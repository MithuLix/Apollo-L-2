"use strict";
// default parameter
function getDefault(num1, num2 = 21) {
    return num1 + num2;
}
getDefault(45);
// spread Operator
const myFriends = ['chandler', 'joye', 'ross'];
const newFriends = ["monika", "somilka", 'hafa'];
myFriends.push(...newFriends);
console.log(myFriends);
