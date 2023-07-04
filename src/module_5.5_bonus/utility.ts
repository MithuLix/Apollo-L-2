
interface Utility {
    name: string;
    email?: string;
    contactNo: string;
}

type Contacts = Pick<Utility, "email" | "contactNo">

type ContactsOpposite = Omit<Utility, "email" | "contactNo">

//partial. to make all properties be optional type
type Optional = Partial<Utility>

type requiredProps = Required<Utility>


// readonly
const personx: Readonly<Utility> = {
    name:"abu ",
    email:"abc@abu.con",
    contactNo: "57478"
};


// recordType
// type myObj ={
//     a:string,
//     b:string,
//     c:string
// }

// index signature
// type myObj = {
//     [key:string]:string
// }

// record
type myObj = Record<string,string>

const obj:myObj = {
    a:"1",
    b:"2",
    c:"3"
}