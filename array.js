// Array Type Annotations: Two main syntaxes for array type annotations
let names = ['John', 'Paul', 'George', 'Ringo'];
let names2 = ['John', 'Paul', 'George', 'Ringo'];
// Both the above will throw type errors if assigned with the wrong type or an element of the wrong type is pushed
// Multi-dimensional Arrays
let arr = [['str1', 'str2'], ['more', 'strings']];
// Empty arrays are compatible with any other array type
let names3 = []; // No type errors.
/*
    Typescript Tuples:
    With Typescript, you can also define arrays with a fixed sequence fo types.
    Tuple types specify both the lengths and orders of compatible tuples, and will cause errors if those are not followed.
*/
let ourTuple = ['Is', 7, 'our favorite number?', false];
/*
    Tuples act just like arrays as far as Javascript is concerned, but in Typescript they are not compatible. You CAN'T
    assign an array to a tuple variable, even whwen elements are of the correct type.
*/
let tup = ['hi', 'bye'];
let arr2 = ['there', 'there'];
tup = ['there', 'there']; // No Errors.
// tup = arr2; // Type Error! An array cannot be assigned to a tuple.
/*
    Array Type Inference:
    Typescript can infer the type of an array from the type of the elements in the array.
*/
let examAnswers = [true, false, false];
/*
    The type could be boolean[] or [boolean, boolean, boolean]. Typescript will infer the first because it is less restrictive
    and lets you expand the array.
*/
examAnswers[3] = true; // No errors since less restrictive type is boolean[] and not [boolean, boolean, boolean]
let tup2 = [1, 2, 3];
let concatResult = tup2.concat([4, 5, 6]); // concatResult has the value [1,2,3,4,5,6].
// In the code above, TypeScript infers the variable concatResult as an array of numbers, not a tuple.
// Rest Parameters:
function smush(firstString, ...otherStrings) {
    let output = firstString;
    for (let i = 0; i < otherStrings.length; i++) {
        output = output.concat(otherStrings[i]);
    }
    return output;
}
// Array of tuples typing
let danceMoves = [
    ['chicken beak', 4, false],
    ['wing flap', 4, false],
    ['tail feather shake', 4, false],
    ['clap', 4, false],
    ['chicken beak', 4, true],
    ['wing flap', 4, true],
    ['tail feather shake', 4, true],
    ['clap', 4, true]
];
