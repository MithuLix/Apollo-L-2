import { type } from "os";

const arrayOfNumbers = [23, 324, 456, 324];
const arrayOfString = arrayOfNumbers.map((number) => number.toString());
console.log(arrayOfString);


type AreaNumber = {
    height: number;
    width: number;
}

type AreaString = {
    height: string,
    width: string
}
type AreaReadOnly ={
    readonly height: string,
    readonly width: string
}

const  rectangularArea: AreaNumber= {
    height: 12,
    width:32
}

rectangularArea.width = 23



type Volume = {
    height: number;
    width: number;
    depth: number;
}


type Area<T> = {
    [key in keyof T] : T[key]
}