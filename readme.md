### Next Level Web Development | Apollo-L-2
```
    install ts, nodejs, nvm. install pkg=  npm i ts-node-dev
    npx ts-node-dev --respawn --transpile-only server.ts
    npx ts-node-dev --respawn src/mission_1_typescript/module_4_oop/object.ts
    shorthand = tsnd --respawn server.ts
```

### - [x]🎯 Mission 1: Be a Typescript Technocrat: 📗 Table of Content:

```ts
    module 2 : Explore Basic Types of Typescript.
    module 3 : Explore Advanced Types od Typescript.
    module 4 : Object-Oriented Programming in Typescript.
    // module 4.5 : Simple Typescript practice.
    module 5 : Assignment-1.
    module 5.5 : Bonus Module.
```

```ts
| >> Topic's i've learned :  
| -------------------------- | --------------------------- | ---------------------------- |
| Primitive types            | Array and Tuples            | Object                       |
| Literal types              | Optional types              | Function                     |
| Spread                     | Rest                        | Default parameters           |
| Destructuring              | Type alias                  | Union and Intersection types |
| Enum types                 | Null, Unknown, and Never    | Ternary Operator             |
| Nullish Coalescing Operator| Type Assertion              | Interface                    |
| Constraints                | Key of                      | Asynchronous                 |
| Conditional Types          | Mapped Types                | Type vs Interface            |
| Generic in Type            | Generic in Interface        | Generic in Function          |
| Class                      | Parameter                   | Inheritance                  |
| Type Guards                | Type Narrowing              | Abstraction                  |
| Access Modifiers: Public,Private,Protected               | Getter & Setter              |
| Static in Class            | Polymorphism                | Encapsulation                |
| import                     | export                      |
```


### 📗 Explore Content:
- [x] **module 2 : Explore Basic Types of Typescript :**

    * Primitive types: TypeScript includes several primitive types, such as number, string, boolean, null, undefined and symbol. These types represent basic values in JavaScript.Example:
    ```ts
        let age: number = 25;
        let name: string = "John";
        let isStudent: boolean = true;
    ```


    * Array and Tuples: TypeScript provides the Array type for working with arrays. Arrays can be typed by specifying the type of their elements, such as number[] for an array of numbers. Tuples are a specific type of array that have a fixed length and each element can have a different type. For example, [string, number] represents a tuple with a string followed by a number. Example:
    ```ts
        let numbers: number[] = [1, 2, 3, 4, 5];
        let tuple: [string, number] = ["John", 25];
    ```


    * Object: The object type in TypeScript represents any non-primitive type. It can be used as a generic type when the specific shape of an object is not known. Example:
    ```ts
        let person: { name: string; age: number } = {
            name: "John",
            age: 25,
        };
    ```


    * Literal types: TypeScript supports literal types, which allow you to specify exact values as types. For example, type MyType = "foo" | "bar" defines a type MyType that can only be the string values "foo" or "bar". Example:
    ```ts
        let status: "active" | "inactive";
        status = "active";
    ```


    * Optional types: In TypeScript, you can denote optional properties in an object type by appending a ? to the property name. For example, { name?: string } indicates that the name property is optional. Example:
    ```ts
        interface Person {
            name: string;
            age?: number;
        }
    ```


    * Function : TypeScript supports typing functions. You can specify the types of function parameters and the return type using the arrow function syntax or the function keyword. Example:
    ```ts
        function add(a: number, b: number): number {
            return a + b;
        }
    ```


    * Spread and Rest : The spread operator (...) can be used to spread the elements of an array or object into another array or object. 
    ```ts
        let arr1 = [1, 2, 3];
        let arr2 = [...arr1, 4, 5];
    ```


    * The rest parameter (...) allows you to represent an indefinite number of arguments as an array in function definitions. Example:
    ```ts
        function sum(...numbers: number[]): number {
            return numbers.reduce((acc, curr) => acc + curr, 0);
        }
    ```


    * Default parameters and Destructuring : TypeScript supports default parameter values in function definitions, allowing you to specify a default value for a parameter if no argument is provided. Destructuring enables you to extract properties or elements from objects and arrays into separate variables. Example:
    ```ts
        function greet(name: string = "Guest"): string {
            return `Hello, ${name}!`;
        }
    ```
    * Destructuring: Destructuring allows you to extract values from arrays or objects into individual variables. Example:
    ```ts
        let [x, y, z] = [1, 2, 3];
        let { name, age } = { name: "John", age: 25 };
    ```


    * Type alias : Type aliases in TypeScript allow you to create a new name for a type. They provide a way to simplify complex types or to give them more descriptive names. Example:
    ```ts
        type Point = { x: number; y: number };
        let point: Point = { x: 1, y: 2 };
    ```


    * Union and Intersection types : Union types allow you to specify that a value can be one of several types. For example, string | number represents a type that can be either a string or a number. Intersection types allow you to combine multiple types into one. For example, TypeA & TypeB represents a type that has the properties of both TypeA and TypeB. Example:
    ```ts
        type ID = string | number;
        type Person = { name: string } & { age: number };
    ```


    * Enum types :  Enums allow you to define a set of named constants. Each constant has an associated numeric value by default, starting from 0, but you can also assign custom values. Example:
    ```ts
        enum Color {
            Red,
            Green,
            Blue,
        }
        let color: Color = Color.Red;
    ```


    * Null, Unknown, and Never Types : TypeScript has a null type that represents the absence of a value. The unknown type is used for values that can be anything. The never type represents a value that will never occur, often used for functions that throw errors or have infinite loops. Example:
    ```ts
        let nullableValue: null = null;
        let unknownValue: unknown = "unknown";
        function throwError(message: string): never {
            throw new Error(message);
        }
    ```


    * Ternary Operator : The ternary operator `(condition ? expr1 : expr2)` is a shorthand way of writing an if-else statement. It evaluates the condition and returns expr1 if true, or expr2 if false. Example:
    ```ts
        let age: number = 20;
        let message: string = age >= 18 ? "Adult" : "Minor";
    ```


    * Nullish Coalescing Operator : The nullish coalescing operator (??) is used to provide a default value when a variable is null or undefined. It returns the left-hand operand if it is not null or undefined, otherwise, it evaluates and returns the right-hand operand. Example:
    ```ts
        let name: string | null = null;
        let displayName: string = name ?? "Guest";
    ```
---



- [x] **module 3 : Explore Advanced Types od Typescript :**

    * Type Assertion: Type assertion in TypeScript is used to explicitly specify the type of a value. It is typically used when you know more about the type of a value than TypeScript can infer. Example:
    ```ts
        let value: unknown = "Hello";
        let length: number = (value as string).length;
    ```


    * Interface: Interfaces define the structure of an object in TypeScript. They describe the properties and their types that an object should have. Example:
    ```ts
        interface Person {
            name: string;
            age: number;
        }

        let person: Person = {
            name: "John",
            age: 25,
        };
    ```


    * Type vs Interface:
    Both `type` and `interface` can be used to define custom types. The main difference is that `interface` is generally used for object shapes, while `type` can represent other types as well. Example:
    ```ts
        type Point = {
            x: number;
            y: number;
        };

        interface Vehicle {
            name: string;
            wheels: number;
        }
    ```


    * Generic in Type: Generics allow you to create reusable code that can work with different types. Example:
    ```ts
            type Box<T> = {
            value: T;
        };

        let box: Box<number> = { value: 42 };
    ```


    * Generic in Interface: Generics can also be used in interfaces to create generic types. Example:
    ```ts
        interface ArrayWrapper<T> {
            array: T[];
        }

        let wrapper: ArrayWrapper<string> = { array: ["a", "b", "c"] };
    ```


    * Generic in Function: Functions can have generic type parameters that allow the caller to specify the types of the arguments and return value dynamically. Example:
    ```ts
        function identity<T>(value: T): T {
            return value;
        }

        let result = identity<number>(42);
    ```


    * Constraints: Constraints in generics allow you to limit the acceptable types for a generic parameter. Example:
    ```ts
        interface Printable {
            print(): void;
        }

        function printItem<T extends Printable>(item: T) {
            item.print();
        }
    ```


    * keyof: The `keyof` operator returns the union of all the property names of a given type. Example:
    ```ts
        type Person = {
            name: string;
            age: number;
        };

        type PersonKeys = keyof Person; // "name" | "age"
    ```


    * Asynchronous: Asynchronous programming in TypeScript allows you to write non-blocking code using promises, async/await, or callbacks. Example:
    ```ts
        async function fetchData() {
            const response = await fetch("https://api.example.com/data");
            const data = await response.json();
        return data;
        }
    ```


     Conditional Type: Conditional types in TypeScript allow you to define types based on conditions. They use the `extends` keyword to check a condition and infer a specific type accordingly. Example:
    ```ts
        type TypeName<T> = T extends string ? "string" : "other";
        let name: TypeName<number> = "other";
    ```



    * Mapped Type: Mapped types allow you to create new types by transforming each property of an existing type. Example:
    ```ts
        type Person = {
            name: string;
            age: number;
        };

        type ReadonlyPerson = {
            readonly [K in keyof Person]: Person[K];
        };
    ```
---



- [x] **module 4 : Object-Oriented Programming in Typescript :**

    * Class: Classes in TypeScript are used to define blueprints for creating objects. They encapsulate data and behavior into a single unit. Example:
    ```ts
        class Person {
            name: string;
            age: number;

            constructor(name: string, age: number) {
                this.name = name;
                this.age = age;
            }

            greet() {
                console.log(`Hello, my name is ${this.name}.`);
            }
        }
    ```


    * Parameter: Parameters are the variables declared in a function or method that accept input values. Example:
    ```ts
        function addNumbers(a: number, b: number): number {
            return a + b;
        }

        let sum = addNumbers(5, 3);
    ```


    * Inheritance: Inheritance is a mechanism in TypeScript where a class inherits properties and methods from another class. It promotes code reuse and allows for hierarchical relationships between classes. Example:
    ```ts
        class Animal {
            name: string;
            constructor(name: string) {
                this.name = name;
            }
            speak() {
                console.log("Animal speaks.");
            }
        }

        class Dog extends Animal {
            speak() {
                console.log("Dog barks.");
            }
        }

        let dog = new Dog("Buddy");
        dog.speak(); // Output: Dog barks.
    ```


    * Type Guards: Type guards in TypeScript are conditional statements that allow you to narrow down the type of a value within a certain code block. They help in performing type-specific operations safely. Example:
    ```ts
        function printLength(value: string | number) {
            if (typeof value === "string") {
                console.log(value.length);
            } else {
                console.log("Invalid value.");
            }
        }
    ```


    * Type Narrowing: Type narrowing refers to the process of reducing the type of a value based on certain conditions. It allows TypeScript to determine the most specific type that can be safely inferred at compile-time. Example:
    ```ts
        type Shape = Circle | Rectangle;

        function calculateArea(shape: Shape) {
            if (shape instanceof Circle) {
            // Type narrowed to Circle
                return Math.PI * shape.radius * shape.radius;
            } else {
            // Type narrowed to Rectangle
                return shape.width * shape.height;
            }
        }

    ```


    * Abstraction: Abstraction is a concept in TypeScript that allows you to create abstract classes and methods. Abstract classes cannot be instantiated directly, but they provide a common structure and behavior for derived classes to implement. Example:
    ```ts
        abstract class Animal {
        abstract makeSound(): void;

        move() {
            console.log("Animal is moving.");
            }
        }

        class Dog extends Animal {
        makeSound() {
            console.log("Dog barks.");
            }
        }
    ```


    * Access Modifiers: Access modifiers in TypeScript define the accessibility of class members (properties and methods). There are three access modifiers: public, private, and protected. Example:
    ```ts
        class Person {
            private name: string;
            protected age: number;
            public gender: string;

            constructor(name: string, age: number, gender: string) {
                this.name = name;
                this.age = age;
                this.gender = gender;
            }

            introduce() {
                console.log(`My name is ${this.name}.`);
            }
        }
    ```


    * Polymorphism: Polymorphism in TypeScript refers to the ability of objects of different classes to be treated as objects of a common superclass. It allows methods to be overridden in derived classes, providing different implementations. Example:
    ```ts
        class Animal {
            makeSound() {
                console.log("Animal makes a sound.");
            }
        }

        class Dog extends Animal {
            makeSound() {
                console.log("Dog barks.");
            }
        }

        let animal: Animal = new Dog();
        animal.makeSound(); // Output: Dog barks.
    ```


    * Encapsulation: Encapsulation is the concept of bundling data and methods within a class and controlling their access. It allows you to hide implementation details and expose only necessary functionality to the outside world. Example:
    ```ts
        class Person {
            private name: string;
            private age: number;

            constructor(name: string, age: number) {
                this.name = name;
                this.age = age;
            }

            getName() {
                return this.name;
            }

            getAge() {
                return this.age;
            }
        }
    ```
---



- [x] **module 5.5 : Bonus Module :**

    * Import/Export: In TypeScript, import and export are used to organize and modularize code across different files or modules. import is used to bring functionality from other modules, and export is used to expose functionality from the current module. Example:
    ```ts
        // math.ts
        export function add(a: number, b: number): number {
            return a + b;
        }

        // main.ts
        import { add } from "./math";
        let result = add(5, 3);
    ```