class Parent {
    constructor(public name: string,public age: string,public address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours:number):string {
        return `This ${this.name} will sleep for ${hours}`;
    }
}



class Student  extends Parent{
    constructor(name: string, age: string, address: string) {
        super(name, age, address)
    }
}
// const sutnd= new Student("mr, fd", "32", "ghana")
// sutnd.


class Teacher extends Parent{
    designation: string;

    constructor(name: string, age: string, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation;
    }
    makeTeach(subject:string):string {
        return `This ${this.name} will teach ${subject}`;
    }
    readBooks(books:string):string {
        return `This ${this.name} will read ${books}`;
    }
}

// const ttr = new Teacher()
// ttr.