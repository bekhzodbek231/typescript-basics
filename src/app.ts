// let numb: number = 24
// let numb2: number = 2
// console.log(numb * numb2)

// data type

// let myName: string;
// let meaningOfLife: number;
// let isLive: boolean;
// let anything: any;

// myName = "bekhzodbek";
// meaningOfLife = 26;
// isLive = true;
// anything = "yes"

// const arr1 = (a:number, b:number) => {
//     return a * b
// }

// console.log(arr1(8, 19_000_000_0000))

// let numbOrbool: number | boolean;
// let str: string | number

// let re: RegExp = /\w+/g

//Array && object && tuple && enumbs

// let strData = ["javascript", "react", "typescript"]

// const numbData = [125, 785, "str"]

// const boolData = [true, false, 45]

// strData.unshift("next.js")

// strData [1] = "python"

// console.log(strData)

// numbData.push(2, 45, "true")

// console.log(numbData)

//Tuple

// let mytuple: [string, number, boolean ] = ["bekhzodbek", 27, true]

// console.log(typeof mytuple)

// object !
// let obj = {
//     nike: "nike Air",
//     laptop: "macbook",
//     watch: "iwatch",
//     isHuman: true,
//     num: 42
// }

// obj.nike = "Jordan Nike"

// console.log(obj.nike) // "Jordan Nike"

// interface Hacker {
//    name: string;
//    age: number;
//    isActive: boolean;
//    numberOfCases?: (string | boolean | number)[] //union type
// }

// let person1: Hacker ={
//     name: 'bekhzodbek',
//     age: 27,
//     isActive: true,
//     numberOfCases:["Israil bank", 27_000_000, false]

// }
// let person2: Hacker ={
//     name: 'mike',
//     age: 40,
//     isActive: true,

// }

// const whitehacker = (hacker: Hacker) => {
//     return `hello ${hacker.name}`
// }

// console.log(whitehacker(person2))

// enum dayofweek{
//     monday,
//     tuesday,
//     Sunday
// }

// console.log(typeof dayofweek)

// type aliases

// type numberOrString = number | string
// type booleanData = (number | boolean | string) []

// type userId = booleanData

// litural type

// let firstName: string = "bekhzodbek"

// let names: "Raxmatillo" |"will smith" | "jonny depth"

// names = "will smith"

// console.log(names)

// functions
// const arrfun = (a: number, b:number) => {
// return (a * b) +  2
// }

// console.log(arrfun(3, 3))

// type mathFuncton = (a: number, b: number) => number

// let calculate: mathFuncton = (a, b ) => {
//     return a - b
// }

// console.log(calculate(478 , 162))

// optional parameters

// const multiply = (a:number, b: number, c?: number ) => {
//    if (typeof c !== "undefined"){
//        return a + b + c
//    }
//    return a + b
// }
// console.log(multiply(48, 48,48))

// Rest parameters

// const total = (...rest: number[]):number => {
//     return rest.reduce((prev, curr) => prev + curr, 0)
// }

// console.log(total(78, 2, 68, 24, 96))

// const func = (value: number | string) =>  {
//     //type gruard -->
//    if (typeof value === 'string') return "string"
//    if (typeof value === 'number') return "number"
//    return new Error("this never retun ")
// }

// console.log(func(78)) // number

//classes
// visibility modefiers
//  public;
//  readonly;
//  private;
//  protected

// class Car {
//   constructor(
//     public readonly name: string,
//     public model: string,
//     private year: number,
//     protected price: number
//   ) {
//     this.name = name;
//     this.model = model;
//     this.year = year;
//     this.price = price;
//   }

//   public getYear() {
//     return new Date().getFullYear();
//   }

//   public showPrice() {
//     return `it is ${this.price} bucks, including federal tax!`;
//   }
// }
// const buyer = new Car("BMW", "BMW X6", 2019, 85_000_000);

// console.log(buyer.getYear());

// practice with classes

// class Person {
//   name: string;
//   age: number;
//   job: string;
//   position: string;
//   yearsOfExperience: number;
//   isActive: boolean;

//   constructor(
//     name: string,
//     age: number,
//     job: string,
//     position: string,
//     yearsOfExperience: number,
//     isActive: boolean
//   ) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.position = position;
//     this.yearsOfExperience = yearsOfExperience;
//     this.isActive = isActive;
//   }

//   public getIdentity() {
//     return `I am ${this.job}, and I had ${this.yearsOfExperience} years experience in this field.`;
//   }

//   public getIntro() {
//     return `My name is ${this.name}, and I am ${this.age} and i am resposibale for ${this.job}.`;
//   }
// }

// const person1 = new Person(
//   "Bekhzodbek",
//   25,
//   "Software-engineer",
//   "senior",
//   5,
//   true
// );

// console.log(person1.getIntro());
// console.log(person1.getIdentity());
