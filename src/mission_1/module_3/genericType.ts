// generic means generalize
type GenericTuple<X, Y> = [X, Y]
const relation:GenericTuple<string, string> =["persina", "kate kate"];


type relationWithSalaryType ={name:string,salary:number}

const relationWithSalary:GenericTuple<object, string> = [
    {
        name: 'Persian',
        salary:23232323
    },
        'kate winslate'
];


const relationWithSalary2:GenericTuple<relationWithSalaryType,string> = [{
    name: 'Persian',
    salary:23232323
    },
    'kate winslate'
]


///////////////
type GenericArray<T> = Array<T>
const rollNumbers: GenericArray<number> = [43, 45, 21];
const rollNumbers2: GenericArray<string> = ["33", "34", "23"];
const rollNumbers3: GenericArray<boolean> = [true, false];


type nameRollType = {name: string, roll:number};

const userNameAndRollNumber: GenericArray<nameRollType> = [
    {
        name: "John",
        roll: 43
    },
    {
        name: "Jane",
        roll: 45
    },
    {
        name: "jennie",
        roll: 423
    }
];
