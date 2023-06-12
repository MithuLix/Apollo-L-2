### Next Level Web Development
```
    install ts, nodejs, nvm. install pkg=  npm i ts-node-dev
    ts-node-dev --respawn --transpile-only server.ts
    shorthand = tsnd --respawn server.ts
```

### 📗 Table of Content:
- [x] 🎯 Mission 1: Be a Typescript Technocrat:
    ```ts
        module 2 : Explore Basic Types of Typescript.
        module 3 : Explore Advanced Types od Typescript.
        module 4 : Object-Oriented Programming in Typescript.
        module 4.5 : Simple Typescript practice.
        module 5 : Assignment-1.
        module 5.5 : Bonus Module.
    ```
- [ ] 🎯 Mission 2: Be a Mongoose Master

- [ ] 🎯 Mission 3: Be a NoSQL Backend Braniac
<hr/>

### 📗 Explore Content:
- [x] * **🎯 Mission 1: Be a Typescript Technocrat: module 2 : Explore Basic Types of Typescript :**

    1. Primitive types: TypeScript includes several primitive types, such as number, string, boolean, null, undefined, and symbol. These types represent basic values in JavaScript.

    2. Array and Tuples: TypeScript provides the Array type for working with arrays. Arrays can be typed by specifying the type of their elements, such as number[] for an array of numbers. Tuples are a specific type of array that have a fixed length and each element can have a different type. For example, [string, number] represents a tuple with a string followed by a number.

    3. Object: The object type in TypeScript represents any non-primitive type. It can be used as a generic type when the specific shape of an object is not known.

    4. Literal types: TypeScript supports literal types, which allow you to specify exact values as types. For example, type MyType = "foo" | "bar" defines a type MyType that can only be the string values "foo" or "bar".

    5. Optional types: In TypeScript, you can denote optional properties in an object type by appending a ? to the property name. For example, { name?: string } indicates that the name property is optional.

    6. Function: TypeScript supports typing functions. You can specify the types of function parameters and the return type using the arrow function syntax or the function keyword.

    7. Spread and Rest: The spread operator (...) can be used to spread the elements of an array or object into another array or object. The rest parameter (...) allows you to represent an indefinite number of arguments as an array in function definitions.

    8. Default parameters and Destructuring: TypeScript supports default parameter values in function definitions, allowing you to specify a default value for a parameter if no argument is provided. Destructuring enables you to extract properties or elements from objects and arrays into separate variables.

    9. Type alias: Type aliases in TypeScript allow you to create a new name for a type. They provide a way to simplify complex types or to give them more descriptive names.

    10. Union and Intersection types: Union types allow you to specify that a value can be one of several types. For example, string | number represents a type that can be either a string or a number. Intersection types allow you to combine multiple types into one. For example, TypeA & TypeB represents a type that has the properties of both TypeA and TypeB.

    11. Enum types: Enums allow you to define a set of named constants. Each constant has an associated numeric value by default, starting from 0, but you can also assign custom values.

    12. Null, Unknown, and Never Types: TypeScript has a null type that represents the absence of a value. The unknown type is used for values that can be anything. The never type represents a value that will never occur, often used for functions that throw errors or have infinite loops.

    13. Ternary Operator: The ternary operator (condition ? expr1 : expr2) is a shorthand way of writing an if-else statement. It evaluates the condition and returns expr1 if true, or expr2 if false.

    14. Nullish Coalescing Operator: The nullish coalescing operator (??) is used to provide a default value when a variable is null or undefined. It returns the left-hand operand if it is not null or undefined, otherwise, it evaluates and returns the right-hand operand.
