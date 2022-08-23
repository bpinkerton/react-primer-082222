// JavaScript is a scripting language, OOP language, loosely typed (variables can be reassigned to any type at any time)
// JIT - Just In Time Compiler

// Primitives vs Reference Types (if you are not primitive, YOU ARE AN OBJECT)

/* Primitives in Javascript     7 Total Primitives
    string - sequence of characters
    number - numbers either floating or not
    bigint - reserved for when a number is too large to fit in a regular number
    boolean - true / false (every value in JS can be evaluated as a boolean -> Truthy vs Falsy)
    symbol - symbol
    undefined - implicity not been pointed to anything 
    null - explicitly pointed to nothing

    *NaN - Not a Number

    let x;    --> undefined
    ---
    let x = null;  --> null
*/

// Variable Declarations
var x = 5;   //   <-- ignore var for now (let is better)
let y = 5;   //  block scoped declaration, allows a reference to be reassigned
y = "hi";
y = false;

const z = 5; // block scoped declaration, does not allow a reference to be reassigned

// constants can still be mutated, just not reassigned
const obj = {
    name: "Brandon"
}
obj.name = "Pinkerton"

// Operators

// x = x + 5;
x += 5;
x -= 5;
x *= 5;
x /= 5;

if(x % 2 == 0) console.log("The numer is even"); // modulo , or modulus operator performs division and give the remainder

// Truthy vs Falsy -> denotes the determinable boolean value of ANY variable in JS without the use of a conditional
// Only 8 falsy values in JS   (EVERYTHING ELSE IS TRUTHY)

//      false           -> False is Falsy
//      "", '', ``      -> Empty String is falsy
//      0, -0           -> Zero and its negative are falsy
//      0n, -0n         -> BigInt Zero is falsy
//      undefined       -> undefined is falsy
//      null            -> null is falsy
//      NaN             -> NaN is falsy
//      *document.all    -> document.all is falsy because it is undefined


function checkTruthy(val){
    if(val){
        console.log("Truthy")
    } else{
        console.log("Falsy")
    }
}


// Object Declaration
let person = {
    name: "Bob",
    age: "Bob"
}
// Empty Object
let emptyObj = {}

// Array Declaration -> ARRAYS ARE NOT TYPED
let mooses = ["Brown", "Grey", false, {beard: true}, NaN, undefined, null]
let emptyArr = []



// a sum of two numbers passed in
function nameOfTheFunction(num1, num2){
    let sum = num1 + num2;
    return sum;
}

console.log(nameOfTheFunction(true, true))


// implement this function such that I can pass any number of arguments and receive a sum
// HINT: look into varargs
function sum(){

}