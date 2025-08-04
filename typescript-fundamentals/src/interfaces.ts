// interface Book {
//   readonly isbn: number;
//   title: string;
//   author: string;
//   genre?: string;

//   //method
//   printAuthor(): void;
//   printTitle(message: string): string;
//   printSomething: (someValue: number) => number;
// }

// const deepWork: Book = {
//   isbn: 9781455586691,
//   title: "Deep Work",
//   author: "Cal Newport",
//   genre: "Self-help",
//   printAuthor() {
//     console.log(this.author);
//   },
//   printTitle(message) {
//     return `${this.title} ${message}`;
//   },

//   //first option
//   //   printSomething: function (someValue) {
//   //     return someValue;
//   //   },

//   // second option
//   printSomething: (someValue) => {
//     // this x
//     console.log(deepWork.author);
//     return someValue;
//   },

//   //third option
//   //   printSomething(someValue) {
//   //     return someValue;
//   //   },

//   //   //alternative
//   //   printAuthor: () => {
//   //     console.log(deepWork.author);
//   //   },
// };

// deepWork.title = "New Title";
// // deepWork.isbn = 6534252; // incorrect
// console.log(deepWork.printSomething(34));

// deepWork.printAuthor();
// const result = deepWork.printTitle("is an awesome book");
// console.log(result);

//challenge
interface Computer {
  readonly id: string;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam: (amount: number) => number;
}

const myComputer: Computer = {
  id: "sagasf",
  brand: "Apple",
  ram: 8,
  upgradeRam: function (amount): number {
    return (this.ram += amount);
  },
};

myComputer.storage = 1024;

console.log(myComputer);
console.log(myComputer.upgradeRam(4)); // upgrades RAM by 4GB
console.log(myComputer);

// Merging, Extend,TypeGuard

interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

// Merging (reopening) an interface in TypeScript is a process where you declare an interface with the same name more than once, and TypeScript will merge their members.

// Merging the interface
interface Person {
  age: number;
}

const person: Person = {
  name: "John",
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

// Extending an interface in TypeScript is a way to create a new interface that inherits the properties and methods of an existing interface. You use the extends keyword to do this. When you extend an interface, the new interface will have all the members of the base interface, plus any new members that you add.

// Extending the interface
interface Employee extends Person {
  employeeId: number;
}

const emloyee: Employee = {
  name: "jane",
  age: 28,
  employeeId: 123,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
  },
};

interface Manager extends Person, DogOwner {
  managePeople(): void;
}

const manager: Manager = {
  name: "Bob",
  age: 35,
  dogName: "Rex",
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Dog Name: ${this.dogName}`;
  },
  managePeople() {
    console.log("Managing people...");
  },
};

interface Person {
  name: string;
}

interface DogOwner extends Person {
  dogName: string;
}

interface Manager extends Person {
  managePeople(): void;
  delegateTasks(): void;
}
