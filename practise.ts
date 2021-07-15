let myName = "Dipraj";
let age: number;
age = 12;
let isHungry: boolean = false;

type StringOrNumber = number | string;
type direction = 'left';

let gameDirection: direction = "left" 
console.log(gameDirection);

let studentId: StringOrNumber = 344304;
studentId = 'web4-344304'
studentId = 122323;
console.log(studentId);


interface Person {
    name: string;
    age: number;
    hobby?: string;
}

type PersonType =  { age: number, name: string,  hobby: string };


let person: Person  = {
    name: "Solaiman Shadin",
    age: 12,
    hobby: "Sleeping"
}

let person2 : Person = {
    name: "Someone",
    age: 80,
}

//  Array 
const numbers: (number| string)[] = [33, 40, 50, 80, 'stefjhj'];
const persons: Person[] = [
    { 
        name: "Solaiman Shadin",
        age: 12,
        hobby: "Sleeping"
    },
    { 
        name: "Solaiman Shadin",
        age: 12,
        hobby: "Sleeping"
    },
    { 
        name: "Solaiman Shadin",
        age: 12,
        hobby: "Sleeping"
    }
];


// functions

const greeting = (name: string) : void => {
    console.log(`Hello ${name}`)
}

greeting("dipraj")

const add = (a: number, b: number): number => {
    return a + b 
}

const addd:number= add(2,5);
console.log(addd);

const introduce = ({name, age, hobby} : Person) : void => {
    console.log(`Hello, my name is  ${name}, And I'm ${age}!, my hobby is ${hobby}`)
}

introduce({
    name: "Dipraj Howlader",
    age: 12,
    hobby: "Sleeping"
})

const getArray = <T>(arr: T[]): T[] => {

    return arr
}

const arr=  getArray<number>([ 1, 2,43, 4 ]);
console.log(arr);
const dtr=  getArray<string>(['1edrew', 'hjdfhjddfjh dfndj' ]);
console.log(dtr);

// enum

enum Week  {
    Sat = 'SAT',
    Sun = "SUN",
    Mon = "MON",
    Tue = "TUE",
    Wed = "WED",
    Thr = "THR",
    Fri = "FRI"
}

console.log(Week.Sat)