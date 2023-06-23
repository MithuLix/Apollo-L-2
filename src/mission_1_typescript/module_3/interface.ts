// interface can be use in object, function, array

import { type } from "os";

type User = {
    name:string,
    age:number
};

type extendedUser= User &{
    role:string
}

interface Iuser {
    name : string,
    age:number
}

interface IextendedUser extends Iuser {
    role: string,
}

const user: extendedUser = {
    name: 'John',
    age: 444,
    role: 'admin'
}


type addTwoNums = (num1:number, num2:number)=>number;
const addNums:addTwoNums = (num1, num2) => num1+ num2;

interface IaddNums {
    (num1:number, num2:number):number
}