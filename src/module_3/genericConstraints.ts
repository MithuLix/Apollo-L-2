const constraintsVar = <T extends MyInfoType>(getInfo: T)=> {
    const women = 'kate kate';
    const newData = {...getInfo, women};
    return newData;
}

type MyInfoType = {
    name: string,
    age: number,
    salary: number,
    other1: boolean,
    other2: null
}
const getInfo: MyInfoType = {
    name: "perssa",
    age: 243,
    salary: 4354352,
    other1: false,
    other2: null,
}

const constraintResult = constraintsVar(getInfo);
console.log(constraintResult);
