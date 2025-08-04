import "./style.css";
import "./functions.ts";
// Type Annotations
let awesomeName: string = "awesomeName";
awesomeName = "newName";
awesomeName = awesomeName.toLocaleLowerCase();
console.log(awesomeName);

// awesomeName = 20 wrong

let amount: number = 20;
amount = 12 - 1;
// amount = pants;

let isAwesome: boolean = true;
isAwesome = false;
// isAwesome = "newTest";

// Type Inference
let teste = "number";
let teste2 = 2;

// ## Challenge 1
let myName: string = "name";
console.log(myName.charAt(0));

let myNumber: number = 10;
myNumber += 10;

let myBoolean: boolean = myNumber >= 5;
myBoolean = !myBoolean;

// myName = 10;
// myNumber = "string";
// myBoolean = "20";

// Union Type

let tax: number | string = 10;
tax = 100;
tax = "$100";

let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "success";
requestStatus = "error";
// requestStatus = "random";

// Type : Any

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

let random;

// const books = ["1984", "Brave New World", "Fahrenheit 451"];

// Challenge - Union Type

let discount: number | string = 20;
discount = "20%";

let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = "shipped";

// Arrays

let prices: number[] = [100, 75, 42];

let fruit: string[] = ["apple", "orange"];

// let randomValues: [] = ['hello']
let emptyValues = [];
let names = ["peter", "susan", 1];
let array: (string | boolean)[] = ["apple", true, "orange", false];

// Challenge Arrays
let temperatures: number[] = [20, 25, 30];
// temperatures.push('hot');
let colors: string[] = ["red", "green", "blue"];
// colors.push(true);

let mixedArray: (number | string)[] = [1, "two", 3];

let car: { brand: string; year: number } = { brand: "toyota", year: 2020 };
let car1: { brand: string; year: number } = { brand: "audi", year: 2022 };

let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 20 };
let notebook = { title: "notebook" };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

let bike: { brand: string; year: number } = { brand: "yamaha", year: 2010 };
let laptop: { brand: string; year: number } = { brand: "HP", year: 2010 };
let laptop2: { brand: string; year: number } = { brand: "Dell" };

let product1 = { title: "shirt", price: 20 };
let product2 = { title: "pants" };
let products: { title: string; price?: number }[] = [product1, product2];

products.push({ title: "shoes" });

// Functions
