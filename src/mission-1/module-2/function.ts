function add(num1:number, num2:number):number {
    return num1 + num2;
}
add(23, 32);

const arrowFunction = (num1:number, num2:number):number => num1 + num2;


// callback function
const arr = [2,213, 43, 324, 21];
const newArray = arr.map((element:number) => element*element);
console.log(newArray);


const person :{
    name: string,
    balance: number,
    addBalance(money:number): void;
} ={
    name: "mezba",
    balance: 44,
    addBalance(money:number) {
        console.log(`my new balance is ${this.balance + money}`);
         
    }
}