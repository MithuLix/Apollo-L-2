"use strict";
function add(param1, param2) {
    if (typeof param1 === "number" && param2 === 'number') {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
add("1", "4");
add(1, 4);
function getUser(user) {
    if ("role" in user) {
        return `I am admin and my role is ${user.role}`;
    }
    else {
        return 'I am a normal user';
    }
}
const normalUser1 = { name: "wer" };
const adminUser1 = { name: "ret", role: "admin" };
console.log(getUser(normalUser1));
console.log(getUser(adminUser1));
// instanceof guard
class AnimalTp {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log("I am making sound");
    }
}
class Dog extends AnimalTp {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log("I am barking");
    }
}
class Cat extends AnimalTp {
    constructor(name, species) {
        super(name, species);
    }
    makeMew() {
        console.log("I am Mewing");
    }
}
function getAnimal(animal) {
    if (animal instanceof Dog) {
        animal.makeBark();
    }
    if (animal instanceof Cat) {
        animal.makeMew();
    }
    else {
        animal.makeSound();
    }
}
const animal1 = new Dog("german vai", "dog");
const animal2 = new Cat("persina bai", "cat");
// getAnimal(animal1)
