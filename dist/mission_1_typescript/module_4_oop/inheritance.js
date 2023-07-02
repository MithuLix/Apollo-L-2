"use strict";
class Parent {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `This ${this.name} will sleep for ${hours}`;
    }
}
class Student extends Parent {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
// const sutnd= new Student("mr, fd", "32", "ghana")
// sutnd.
class Teacher extends Parent {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    makeTeach(subject) {
        return `This ${this.name} will teach ${subject}`;
    }
    readBooks(books) {
        return `This ${this.name} will read ${books}`;
    }
}
// const ttr = new Teacher()
// ttr.
