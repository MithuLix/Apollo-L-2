"use strict";
class Animal {
    constructor(name, age, sound) {
        this.name = name;
        this.age = age;
        this.sound = sound;
        this.name = name;
        this.age = age;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
const dog = new Animal('German Sphered', 'Dog', 'Baka Kaka');
dog.makeSound();
