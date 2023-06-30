// one method in different class showing different output.called polymorphism.
class Poly {
    takeNap():void {
        console.log("i am slepping 7 hours per day");
    }
}

class StudentP extends Poly {
    takeNap():void {
        console.log("i am slepping 10 hours per day");
    }
}

class Developer extends Poly {
    takeNap():void {
        console.log("i am sleeping 5 hours per day");
    }
}

function getNap(param:Poly) {
param.takeNap()
}


const person1 = new Poly();
const person2 = new StudentP()
const person3 = new Developer()
getNap(person1)
getNap(person2)
getNap(person3)




class Shape{
    getArea():number{
        return 0;
    }
}

class Circle extends Shape{
    radius: number;
    constructor(radius:number){
        super();
        this.radius = radius
    }
    getArea():number{
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width:number){
        super();
        this.height = height;
        this.width = width;
    }
    getArea(): number {
        return this.height * this.width;
    }
}

function getAreaOfShape(param:Shape){
    console.log(`shape is: ${param.getArea()}`);
}

getAreaOfShape(new Circle(21))
getAreaOfShape(new Rectangle(21, 32))