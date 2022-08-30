// TypeScript is a strongly/statically typed language
// Data Types in TS
//      string
//      number
//      BigInt
//      boolean
//      undefined
//      null
//      NaN
//      symbol
//      void
//      arrays ->       string[]  ||  Array<string>
//      object


let message: any;
message = 'hello world from TypeScript';
message = 5;

let id: number;
id = 27;

let admin: boolean;
admin = false;


// let person: object;
// person = {id: id, message: message}

interface Human{
    age: number;
    //  the ? implies that the property is optional
    speak?: Function
}

let human: Human;
human = {age: 23, speak: () => console.log("guh")}
// we must override the optional flag
human.speak!()


class User implements Human{
    age!: number;
    speak!: Function;

    constructor(private id: number, private username: string, private password: string){
        
    }

    public getId(): number{
        return this.id;
    }

    public setId(id: number): void{
        this.id = id;
    }
}

// let user1: User;
// user1 = {id: 1, username:"bobbyb", password:"123"}

let user2: User;
user2 = new User(2, "billyb", "321")

console.log(user2.getId());

/*      Scope 1

            log(x) -> ? 
            Scope 2
                x = 10
                log(x) -> 10
*/


let daysOfTheWeek: string[]
daysOfTheWeek = ["Monday", "Tuesday", "Wednesday"]

type dayOfTheWeek = "Monday" | "Tuesday" | "Wednesday" | "Friday"; 
type dayOfTheWeekend = "Friday" | "Saturday" | "Sunday";

type days = dayOfTheWeek & dayOfTheWeekend;

let day: days = "Friday"


interface Point extends OtherPoint{
    x: number;
    y: number;
    z: number;
}

interface OtherPoint{
    z: number;
}

function logPoint(point: Point){
    console.log(point.x)
    console.log(point.y)
    console.log(point.z)
}

let a: Point = {
    x: 10,
    y: 15,
    z: 1
}

logPoint(a)

let b: OtherPoint = {
    z: 1
}

let c = {
    x: 10,
    y: 15,
    z: 1
}

logPoint(c)


interface Animal{
    name: string;
    age: number;
}

type HairColor = "Black" | "Brown" | "White"

interface Mammal extends Animal{
    hairColor: HairColor;
}

// is every Mammal an Animal? yes -> Mammal  IS A Animal
// is every Animal a Mammal? NO


let m: Mammal = {
    name: "Betsy",
    age: 132,
    hairColor: "White"
}

let animal: Animal = {
    name: "George",
    age: 12,
}

function checkup(animal: Animal){
    console.log(animal);
}

function checkMammal(mammal: Mammal){
    console.log(mammal);
    
}

checkup(m)

checkMammal(m)

checkup(animal)

checkMammal(animal)