// function sayHello() {
//   return function () {
//     console.log("Hello🤣");
//   };
// }
// //1
// console.log(sayHello()());
// //2
// var x = sayHello();
// x();

// //carrying function
// let sum = (a) => (b) => a + b;
// sum(3)(4);

// var student = {
//   name: "manoj",
//   last: "Dhanekula",
//   fullname: function () {
//     return `${this.last} ${this.name}`;
//   },
// };
// console.log(student.fullname());
// var student1 = {
//   name: "Raja",
//   last: "Sekar",
//   fullname: student.fullname,
// };

// console.log(student1.fullname());

// class cars {
//   constructor(name, wheels, doors, gears) {
//     this.name = name;
//     this.wheels = wheels;
//     this.doors = doors;
//     this.gears = gears;
//     return `Polo car having ${wheels}wheels,${this.doors}doors and ${this.gears}`;
//   }
// }

// const poloCar = new cars("polo", "4", "5", "5");

// console.log(poloCar);

class Banking {
  #balance;
  constructor(name, accountNUm, balance, IFSC) {
    this.name = name;
    this.accountNUm = accountNUm;
    this.#balance = balance;
    this.IFSC = IFSC;
  }

  depost(amt) {
    this.#balance = this.#balance + amt;
    return this.transactionDetails(amt);
  }
  withDrawal(amt) {
    if (this.#balance >= amt) {
      this.#balance = this.#balance - amt;
      return this.transactionDetails(amt);
    } else {
      return `${this.getBalance()}\nAccount Number : ${
        this.accountNUm
      }\nYou don't have insuffient funds of ${amt}`;
    }
  }
  transactionDetails(amt) {
    var date = new Date().toLocaleString();
    var uniqueID = Date.now();
    return `Date : ${date}\nTransactionId : ${uniqueID}\nAccount Number : ${
      this.accountNUm
    }\nAmount : ${amt}\n${this.getBalance()}`;
  }

  getBalance() {
    return `Your balance : ${this.#balance}RS.`;
  }
}

const user1 = new Banking("Manoj", "5498546845", 100, "KMB04778");
const user2 = new Banking("Neha", "987456123", 200, "SBI04658");
const user3 = new Banking("RDX", "548549998", 400, "UNI08484");

console.log(user1.depost(1_00_000));
console.log(user1.withDrawal(50_000), 1);
console.log(user2.withDrawal(50_000));
