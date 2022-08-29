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
let mooses = ["Brown", "Grey", false, {beard: true}, NaN, undefined, null];

//                      this is an arrow function
// mooses.forEach((moose) => console.log(moose))


// a sum of two numbers passed in
function nameOfTheFunction(num1, num2){
    let sum = num1 + num2;
    return sum;
}



// implement this function such that I can pass any number of arguments and return a sum
// HINT: look into varargs
// Spread vs Rest operator
function sum(...numbers){
    let sum = 0;
    numbers.forEach((number) => {
        sum += number;
    });
    return sum;
}

// console.log(sum(3,1,2,3))

function sumArr(numbers){
    let sum = 0;
    numbers.forEach((number) => {
        sum += number;
    });

    return sum;
}

// console.log(sumArr([1,2,3,4,5,6]))

// const sumArrow = (word) => {
//     console.log(word)
// }

// sumArrow("JS is Fun eh?")

// JS Callback Functions??? A callback function is simply put a function that is passed to
// another function in order to delegate the invocation of the function at a later

/*
    function A -> going to take a function 
    function B -> going to be given to A

    STACK
    ----
    A()
        B()
        ...
        <-
    <-
*/

function takesACallback(theCallback, ...arguments){
    console.log(theCallback(...arguments))
}

// takesACallback(sum, 1,2,3,4,5,6,7,8,9,10)

// takesACallback(sumArr, [1,2,3,4,5,6,7,8,9,10,11])

// takesACallback(() => {return "Hi"})

function printHello(){
    console.log("Hello")
}



const exercises = ['Lat Pulldowns', 'Dumbell Bicep Curls', 'Benchpress', 'Dips', 'Deadlifts', 'Pullups']

/* array methods
        forEach()       iterate through each item and do something with 
        map()           iterate through each item, and convert or MAP the item to something new
        filter()        iterate through each item, and filter results based on a predicate
        pop()           removes the last element
        push()          add an element to the end of the array
        shift()         remove the first element
        unshift()       add an element to the front of the array
*/

// exercises.forEach(
//     (exercise, i) => {
//         console.log(exercise)
//     }
// )

const workoutPlan = exercises.map((exercise, i) => 
    {
        return {
            id: i + 1,
            exercise: exercise,
            split: "Arms/Back"
        }
    }
)

// console.log(workoutPlan.filter(workout => workout.exercise.includes("ll")))

// Descructuring    -> breaking apart an array or object into its individual parts
// Why ???          -> to work with the parts as individual items/variables


// Array Destructuring
const [,,,,deadlifts] = workoutPlan;

// Object Destructuring

const {exercise: pickles, id} = deadlifts

// console.log(id, exercise)

const person2 = {
    name: "Barry",
    age: 32,
    address: {
        street: "123 Awesome Ln",
        city: "Fun Town",
        state: "Anywhere but Texas",
        zip: 12345
    }
}

const {address: {city: homeTown}} = person2

// console.log(homeTown)



// Hoisting is just the lifting of implementation to satisfy 
// an invocation that occurs prior to a declaration


var b = "Hoisting"
// hoisting()

function hoisting(){
    console.log(b)
}


// This is a Closure -> a function defined within another function that is only accessible through
// that function
// outer();
function outer(){
    function inner(){
        console.log("Inner")
    }

    inner();
}




// Explore the difference between For-In and For-Of loops


// //  i -> 0, 1, 2, 3, 4
// for (let i in workoutPlan){
//     console.log(i)
// }

// //  i -> obj1, obj2, 
// for (let i of workoutPlan){
//     console.log(i)
// }


// DOM -> Document Object Model, which is a representation of the entire web page in a JS Object

// DOM Selection Methods -> methods to grab elements from the page
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByName()
// document.getElementsByTagName()

const container = document.getElementById("container")

// DOM Manipulation Method
//          element.innerHtml -> set a string of html

// const heading = document.createElement("h3")
// heading.textContent = "Here is my heading"

// const story = document.createElement("p");
// story.innerText = "This is a story..."

const list = document.createElement("ul")
container.appendChild(list)


for(let {id, exercise} of workoutPlan){
    createWorkoutElement(id, exercise)
}

function createWorkoutElement(id, exercise){
    const item = document.createElement("li");
    item.id = id
    item.textContent = `${exercise}`;

    const deleteButton = document.createElement("button")
    deleteButton.textContent = 	'\u2713'
    deleteButton.style.backgroundColor = "#66FF00"

    //                  eventListener("event", callbackFunction)
    deleteButton.addEventListener("click", () => completeWorkout(id))

    item.appendChild(deleteButton)
    list.appendChild(item)
}

function completeWorkout(id){
    const compWorkout = document.getElementById(id)
    compWorkout.removeChild(compWorkout.children[0]);
    
    compWorkout.style.textDecoration = "line-through"
    compWorkout.style.color = "gray"
}

function newWorkout(){
    const input = document.getElementById("workout-input");
    const val = input.value;
    input.value = null
    
    //                      id -> ul.length + 1, exercise --> val

    createWorkoutElement(list.children.length + 1, val)
    // grabbed the info from the input
    //      
}

// Events in javascript
/*
        onclick
        onchange
        onsubmit
        onmouseover
        onmouseout
        ... SO MANY MORE
*/

// If we want an event to trigger some other effect, we need to listen for it ()
//     EventListeners ->    listen for an event trigger, and then resolve a callback



const userInput = 1;
fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
.then(res => res.json()).then(data => console.log(data))