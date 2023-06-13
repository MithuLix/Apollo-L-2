const age: number = 25;
const isName: string = "John";
const isStudent: boolean = true;
const data: null = null;
const value: undefined = undefined;
const id: symbol = Symbol("unique");

console.log(age);       // Output: 25
console.log(isName);      // Output: John
console.log(isStudent); // Output: true
console.log(data);      // Output: null
console.log(value);     // Output: undefined
console.log(id);        // Output: Symbol(unique)

// explicitly declared type
const isAdmin: boolean = true;

// implicitly means typescript understand type by it's own / typescript interference
let admin = 'types';



