// ternary
const ageX:number = 33;

const isAdult = ageX >=18 ? "adult yes" : "not adult no";
console.log(isAdult);



// null and undefined 
const isAuthenticateduser = null
const userName = isAuthenticateduser ?? 'Guest';
console.log({userName});
