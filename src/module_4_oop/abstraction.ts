interface Ivehicle {
    name: string;
    model: string
}

const vehicle: Ivehicle = {
    name: "car",
    model: "2345"
}

interface IvehicleFunc{ 
    startEngine():void;
    stopEngine():void;
    move():void;
}

class Vehicle implements IvehicleFunc {
    constructor(public name: string, public brand:string, public model: number){}

    startEngine():void{
        console.log("I am starting engine");
    }
    stopEngine():void{
        console.log("I am stoping engine");
    }
    move():void{
        console.log("I am moving");
    }
    test(){
        console.log("i am for testing purpose");
    }
}

const  vehicle1 = new Vehicle("Car", "Toyota", 2022)




// abstract method
abstract class VehicleX {
    constructor(public name: string, public brand:string, public model: number){}

   abstract startEngine():void;
   abstract stopEngine():void;
    move():void{
        console.log("I am moving");
    }
    test(){
        console.log("i am for testing purpose");
    }
}

class Car extends VehicleX{
    startEngine():void{
        console.log("I am starting engine");
    }
    stopEngine():void{
        console.log("I am stoping engine");
    }
    move():void{
        console.log("I am moving");
    }
}
const  vehicleX = new Vehicle("Car", "audi", 2050)
