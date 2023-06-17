// when declare type, first letter should be uppercase as conventionally
type CrushType = {
    name:string;
    age?:number;
    profession:string;
    address:string;
}

const crush1: CrushType = {
    name: "moina pakhi",
    age: 33,
    profession: "Web developer",
    address: "rangpur"
}

const crush2:CrushType ={
    name: "tia pakhi",
    age: 33,
    profession: "Web developer",
    address: "dhaka"
}


// boolean type alias
type CrushMarriedType = boolean;
const isCrushMarried: CrushMarriedType = false;

// string type alias
type CourseName = string;
const courseNameType: CourseName =  "next level web development"



// function type alias
type operationType = (x:number, y:number)=> number
const calculate=(
    number1:number,
    number2:number,
    operation:  operationType
) => {
    return operation(number1, number2)
}
calculate( 43, 43,(x,y)=> x +y)
calculate( 43, 43,(x,y)=> x -y)
calculate( 43, 43,(x,y)=> x *y)


