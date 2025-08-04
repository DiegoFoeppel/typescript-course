function sayHi(name: string) {
  console.log("Name is", name);
}

sayHi("Name");
sayHi("Diego");

function calculateDiscount(price: number): number {
  //   price.toUpperCase();

  const hasDiscount = true;
  if (hasDiscount) {
    return price;
  }

  return price * 0.9;
}

const finalPrice = calculateDiscount(200);
console.log(finalPrice);

// any example
// function addThree(number: any) {
//   let anotherNumber: number = 3;
//   return number + anotherNumber;
// }

// const resultt = addThree(2);
// const someValue = resultt;

// someValue.myMethod();

// Challenge

const names: string[] = ["John", "Jane", "Jim", "Jill"];

function isNameInList(name: string): boolean {
  return names.includes(name);
}

let nameToCheck: string = "Jane";
if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list.`);
} else {
  console.log(`${nameToCheck} is not in the list.`);
}

function calculatePrice(price: number, discount?: number) {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);
console.log(priceAfterDiscount);

let priceWithoutDiscount = calculatePrice(300);
console.log(priceWithoutDiscount);

function calculateScore(initialScore: number, penaltyPoints: number = 0) {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(300, 10);
let scoreWihtoutPenalty = calculateScore(300, 10);

// Rest Parameters

function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  let total = numbers.reduce((previous, current) => {
    return previous + current;
  });

  return `${message}${total}`;
}

let result = sum("The total is: ", 1, 2, 3, 4, 5, 6);
console.log(result);

function logMessage(message: string): void {
  console.log(message);
  return "hello world";
}

logMessage("Hello, TypeScript");

// Challenge
function processInput(value: string | number) {
  if (typeof value === "number") {
    return value * 2;
  } else if (typeof value === "string") {
    return value.toLocaleUpperCase();
  }
}

console.log(processInput(10));
console.log(processInput("value"));

function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return {
    id,
    isActive: id % 2 == 0,
  };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });

console.log(first, second);

function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to the course ${student.name.toLocaleUpperCase()}`);
}

const newStudent = {
  id: 1,
  name: "Ana",
  email: "ana@gmail.com",
};
createStudent(newStudent);
// createStudent({ id: 1, name: "bob", email: "bob@gmail.com" });

function processData(
  input: string | number,
  config: { reverse: boolean} 
) {
  if (config.reverse && typeof input === "string") {
    let reversedString = 
  } else if (typeof input === "number") {
    return input * input;
  } else if (typeof input === "string") {
    return input.toLocaleUpperCase();
  }
}
