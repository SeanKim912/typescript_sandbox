// tsc test.ts will run the Typescript transcompiler and create an equivalent test.js file and surface any errors.
console.log("Welcome to Typescript");
/*
    Type Inference:
    - Typescript will infer the type of a variable based on the value intially assigned to it at declaration, and expect
    it to match at all times.

    Type Shapes:
    - Typescript will infer the type of a variable based on the shape of the object assigned to it at declaration, and
    so it knows what properties and methods it has and if they are valid.

    Recognized data types:
    - boolean
    - number
    - null
    - string
    - undefined
*/
var onOrOff;
onOrOff = 1;
onOrOff = false;
/*
    Declaring a variable without assignment will result in a type of 'any' which is the most flexible type in Typescript.
    The variable above wasn't assigned a value at declaration, so neither reassignment following it will result in an
    error.

    With a type annotation you can declare a variable without assignment but still ensure a type is enforced later on. See below.
    Type annotations automatically get removed when compiled to Javascript.
*/
var mustBeString;
mustBeString = "Hello";
mustBeString = 1; // Error: Type '1' is not assignable to type 'string'
