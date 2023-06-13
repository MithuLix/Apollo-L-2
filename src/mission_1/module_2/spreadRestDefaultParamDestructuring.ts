// default parameter
function getDefault(num1: number, num2: number=21): number {
    return num1 + num2;
}
getDefault(45)


// spread Operator
const myFriends=['chandler', 'joye', 'ross'];
const newFriends = ["monika", "somilka", 'hafa'];
myFriends.push(...newFriends);
console.log(myFriends);
