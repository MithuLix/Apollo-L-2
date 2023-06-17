interface GenericInterface<T, U = null>{name:string, husband:T, wife?: U};

const interfaceVariable1: GenericInterface<boolean, string> = {name: "persiana", husband: true, wife: "sundori"};
const interfaceVariable2: GenericInterface<string> = { name: "persiana", husband: "peter"}


interface husbandInterface {name: string; salary: number}
const interfaceVariable3: GenericInterface<husbandInterface> = { 
        name: "persiana", 
        husband: {
            name: "peter",
            salary: 555555
        }
    }

interface husbandWifeInterface {name:string, age:number };
const interfaceVariable4: GenericInterface<husbandWifeInterface, husbandWifeInterface> = {
    name: "pixer",
    husband: {
        name: "pixy",
        age: 100
    }
}