"use strict";
const age = 25;
const isName = "John";
const isStudent = true;
const data = null;
const value = undefined;
const id = Symbol("unique");
console.log(age); // Output: 25
console.log(isName); // Output: John
console.log(isStudent); // Output: true
console.log(data); // Output: null
console.log(value); // Output: undefined
console.log(id); // Output: Symbol(unique)
// explicitly declared type
const isAdmin = true;
// implicitly means typescript understand type by it's own / typescript interference
let admin = 'types';
