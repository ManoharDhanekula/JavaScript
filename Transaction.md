```js
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
```
