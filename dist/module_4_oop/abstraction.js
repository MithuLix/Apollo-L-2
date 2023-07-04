"use strict";
const vehicle = {
    name: "car",
    model: "2345"
};
class Vehicle {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log("I am starting engine");
    }
    stopEngine() {
        console.log("I am stoping engine");
    }
    move() {
        console.log("I am moving");
    }
    test() {
        console.log("i am for testing purpose");
    }
}
const vehicle1 = new Vehicle("Car", "Toyota", 2022);
// abstract method
class VehicleX {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    move() {
        console.log("I am moving");
    }
    test() {
        console.log("i am for testing purpose");
    }
}
class Car extends VehicleX {
    startEngine() {
        console.log("I am starting engine");
    }
    stopEngine() {
        console.log("I am stoping engine");
    }
    move() {
        console.log("I am moving");
    }
}
const vehicleX = new Vehicle("Car", "audi", 2050);
