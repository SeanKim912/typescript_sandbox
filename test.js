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
let onOrOff;
onOrOff = 1;
onOrOff = false;
/*
    Declaring a variable without assignment will result in a type of 'any' which is the most flexible type in Typescript.
    The variable above wasn't assigned a value at declaration, so neither reassignment following it will result in an
    error.

    With a type annotation you can declare a variable without assignment but still ensure a type is enforced later on. See below.
    Type annotations automatically get removed when compiled to Javascript.
*/
let mustBeString;
mustBeString = "Hello";
// mustBeString = 1; // Error: Type '1' is not assignable to type 'string'
/*
    Parameters in functions can have type annotations as well. Any parameter without a type annotation is assumed to be of type 'any'.
*/
function printKeyValue(key, value) {
    console.log(`${key}: ${value}`);
}
printKeyValue('Courage', 1337); // Prints: Courage: 1337
printKeyValue('Mood', 'scared'); // Prints: Mood: scared
// Optional parammeters: ? is added after the parameter name to make it optional.
function greet(name) {
    console.log(`Hello, ${name || 'Anonymous'}!`);
}
greet('Anders'); // Prints: Hello, Anders!
greet(); // TypeScript Error: Expected 1 arguments, but got 0.
// Default parameters: If parameter is assigned a default value, Typescript will infer the type from the default value.
function greeting(name = 'Anonymous') {
    console.log(`Hello, ${name}!`);
}
// Inferring Return Types: Typescript will infer the return type of a function based on the return value.
function ouncesToCups(ounces) {
    return `${ounces / 16} cups`;
}
// const liquidAmount: number = ouncesToCups(3); // Type 'string' is not assignable to type 'number'.
// Explicit Return Types: You can also explicitly declare the return type of a function.
function createGreeting(name) {
    if (name) {
        return `Hello, ${name}!`;
    }
    return "Name must be a string!";
    // Typescript Error: Type 'undefined' is not assignable to type 'string'.
}
;
// Void Return Type: If a function doesn't return anything, you should declare it to have a void return type.
function logGreeting(name) {
    console.log(`Hello, ${name}!`);
}
// Documentation Comments: Many text editors will display documentation comments when hovering over a function or variable.
/**
   * Returns the sum of two numbers.
   *
   * @param x - The first input number
   * @param y - The second input number
   * @returns The sum of `x` and `y`
   *
   */
function getSum(x, y) {
    return x + y;
}
// Spread Syntax:
function gpsNavigate(startLatitudeDegrees, startLatitudeMinutes, startNorthOrSouth, startLongitudeDegrees, startLongitudeMinutes, startEastOrWest, endLatitudeDegrees, endLatitudeMinutes, endNorthOrSouth, endLongitudeDegrees, endLongitudeMinutes, endEastOrWest) {
    /* navigation subroutine here */
}
let codecademyCoordinates = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates = [25, 0, 'N', 71, 0, 'W'];
gpsNavigate(...codecademyCoordinates, ...bermudaTCoordinates);
