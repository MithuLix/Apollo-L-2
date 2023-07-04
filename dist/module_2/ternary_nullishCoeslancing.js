"use strict";
// ternary
const ageX = 33;
const isAdult = ageX >= 18 ? "adult yes" : "not adult no";
console.log(isAdult);
// null and undefined 
const isAuthenticateduser = null;
const userName = isAuthenticateduser !== null && isAuthenticateduser !== void 0 ? isAuthenticateduser : 'Guest';
console.log({ userName });
