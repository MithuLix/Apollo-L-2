import { type } from "os";

type Alphanumeric = string | number;
function add(param1:Alphanumeric, param2:Alphanumeric):Alphanumeric {
    if (typeof param1 === "number" && param2 === 'number' ) {
        return param1 + param2
    }else {
        return param1.toString() + param2.toString()
    }
}
add("1", "4")
add(1,  4)


// in guard
type normalUserType = {
    name: string
}
type AdminUserType ={
    name: string;
    role: "admin"
}

function getUser(user:normalUserType| AdminUserType):string{
    if ("role" in user) {
        return `I am admin and my role is ${user.role}`
    }else {
        return 'I am a normal user'
    }
}

const normalUser1: normalUserType = {name: "wer"}
const adminUser1: AdminUserType = {name: "ret", role:"admin"}

console.log(getUser(normalUser1));
console.log(getUser(adminUser1));

// instanceof guar
class AnimalTp{
    name: string;
    species: string;
    constructor(name:string, species:string){
        this.name = name
        this.species = species
    }
    makeSound(){
        console.log("I am making sound");
    }
} 

class Dog extends AnimalTp {
    constructor(name:string, species:string) {
        super(name, species)
    }
    makeBark(){
        console.log("I am barking");
    }
}

class Cat extends AnimalTp {
    constructor(name:string, species:string) {
        super(name, species)
    }
    makeMew(){
        console.log("I am Mewing");
    }
}

function getAnimal(animal: Animal){
    if(animal instanceof Dog){
        animal.makeBark()
    }
    if(animal instanceof Cat){
        animal.makeMew()
    }else{
       animal.makeSound()
    }
}

const animal1= new Dog("german vai", "dog")
const animal2= new Cat("persina bai", "cat")

// getAnimal(animal1)