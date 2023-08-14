var score:number = 95;
let fri = "tin";
console.log("j");

let aa:number = 12;
let ba: number = 2;
console.log(aa/ba);


const sum = (a: number,b: string) => {
    return a + b;
}

// union type

let album : string | number;
album = 1912



let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];

let bands: string[] = []

// tuple
let myTuple: [string,number]=['asa',32]


//  defining type

type Guitarist = {
name: string,
// means boolean or undefined(optional)
active?: boolean,
albums: (string | number)[]
}
let evh: Guitarist = {
name: 'Eddie',
active: false,
albums: [1984, 5150, 'OU812']
}
const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}!`
    }
console.log(greetGuitarist(evh))

// enum
enum Grade{
U = 1,
D,
C,
B,
A,}
console.log(Grade.U)

// functions
const add = (a: number, b: number): number => {
    return a + b
}
// interface and number syntax diff


    //type mathFunction = (a: number, b: number) =>number
interface mathFunction {
(a: number, b: number): number
}

// optional parameters.
const addA11 = (a: number, b: number, c?: number):
number => {
if (typeof c!== 'undefined') {
return a + b + c
}
return a +b
}

// Rest Parameters
const total = (...nums: number[]): number => {
return nums.reduce ((prev, curr) => prev + curr)
}

// custom type guard
const isNumber = (value: any): boolean => {
return typeof value === 'number'
? true: false}
// use of the never type
const numberOrString = (value: number | string):
string => {
if (typeof value === 'string') return 'string'
if (isNumber(value)) return 'number'

return createError('This should never happen!")

}