function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === "string"){
        const value = parseFloat(param) * 1000;
        return `The Converted value is: ${value} grams`;
    }
    if (typeof param === "number"){
        const value = param * 1000;
        return value;
    }
}

const resultToBeNumber = kgToGram(333) as number;
const resultToBeString = kgToGram('4334') as string;

console.log(resultToBeNumber);
console.log(resultToBeString);



// method 2

type customErrorType={
    message:string;
}

try {
    
} catch (error) {
    console.log((error as customErrorType).message);
}

