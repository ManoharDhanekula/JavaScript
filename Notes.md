# Basic of javascripts

- Funtions
  -Arrows Funtion
  -Anonymous Functions
- Truthy vs Falsy

## Shortcuts

- `ctrl + shifts + p` - Opening Search
- `alt + arrow` - Move Line
-

### Copy by value

```js
let t1 = [100, 100];
let t2 = t1.comcat();
console.log(t2);
```

### Copy by Reference

```js
let a = [1, 3, 5];
let b = a;
```

- In this the b is refering the a values in the array.

### Template Literal

```js
funtion full (First , last){
    `welcome ${First} ${second}`
}
console.log(Mano,D);
```

## Array Destructure

### Hole

```js
const [, t1, t2, t3 = 80] = [100, 200, null];
console.log(t1, t2);
```

### Default

```js
const [t1, t2, t3 = 80] = [100, 200];
console.log(t1, t2, t3);
```

### Rest

```js
const [t1, ...t2] = [100, 200],300,400;
console.log(t1, t2);
```

- In Rest you can only at last of the Elements.

# object Destructuring

```js
const { name, person, skill } = {
  Name: "Mano",
  Gender: "M",
  Person: "Happy",
};
console.log(name);
```

---

---

**Task 2**

What is Difference B/w Parameters and Arguments?

| Parameters                                                                                           | Arguments                                                                             |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| The values that are declared within a function when the function is called are known as an argument. | The variables that are defined when the function is declared are known as parameters. |
| Actual Parameters                                                                                    | Formal Parameters.                                                                    |

---

---

# DAY 3

**IIFE - Immediately Invoked Function Expression **

- name clash / namespace Free.
- Tool to convert IIFE WebPAck Tool.

```js
(function double(n) {
  console.log(n * 2);
})(10);
```

**Annonymous Arrow IIFE**

- It is not a function it is Pattern.

```js
((n) => {
  console.log(n * 2);
})(10);
```

**They are five pilars of Programming**

1. Readability.
2. Maintians of Code.
3. Performance.
4. Extensibility
5. Testability.

**Object Methods**

_Object.key()_  
_Object.value()_

```js

```

**Spread VS operater**

**https://ragavkumarv.com/blog/spread-vs-rest/#spread-vs-rest-operator**

**Ex - 1**

```js
const getPersonInfo = (person) => {
  const {
    name: { first, last },
    age,
    favoriteColors: [t1, t2],
  } = {
    name: { first: "Alice", last: "Johnson" },
    age: 28,
    favoriteColors: ["blue", "green"],
  };
  return `${first} ${last} is ${age} years old. Her favorite colors are ${t1} and ${t2}.`;
};
console.log(getPersonInfo());
```

**Ex - 2**

```js
function createBook(title, author, year) {
  return {
    title,
    author,
    year,
    getSummary() {
      return `${title} by ${author}, published in ${year}.`;
    },
  };
}

const book = createBook("1984", "George Orwell", 1949);
console.log(book.getSummary());
```

**Ex-2**

```js
const cart = [
  { name: "Apple", price: 0.5, quantity: 4 },
  { name: "Banana", price: 0.25, quantity: 6 },
];

const newItems = [
  { name: "Cherry", price: 0.75, quantity: 5 },
  { name: "Date", price: 1, quantity: 3 },
];

const children = cart.concat(newItems);
console.log(children);
function calucation1() {
  let sum = 0;
  for (let i = 0; i < children.length; i++) {
    sum += children[i].price * children[i].quantity;
  }
  console.log(sum);
}

function calucation(children) {
  let sum = 0;
  for (let item of children) {
    sum += item.price * item.quantity;
  }
  return sum;
}

console.log("Total of Cart : ", calucation(children));
```

**Ex -2**

```js
const library = [
  {
    title: "The Great Gatsby",
    authors: ["F. Scott Fitzgerald"],
    borrowed: true,
  },
  { title: "To Kill a Mockingbird", authors: ["Harper Lee"], borrowed: true },
  { title: "1984", authors: ["George Orwell"], borrowed: true },
  { title: "The Hobbit", authors: ["J.R.R. Tolkien"], borrowed: true },
  { title: "Brave New World", authors: ["Aldous Huxley"], borrowed: true },
];

// Task 1: Determine if all books in the library have been borrowed.

function borrowed9(library) {
  let sum;
  let arr = [];
  for (let i = 0; i < library.length; i++) {
    sum = library[i].borrowed;
    arr.push(sum);
  }
  var Boolean = arr.includes(true);
  if (Boolean == true) {
    console.log("All books in the library have been borrowed.");
  } else {
    console.log("Not all books in the library have been borrowed.");
  }
}
borrowed9(library);

// Task 2: Determine if there are books in the library written by multiple authors
```

## Array

https://ragavkumarv.com/array-methods/?method=map
_Key Words_

- Array.reverse();
- Array.includes() - It is boolean one , It Searches for an element and Say it "True or False".
- Array.join() - Example " [1,2].join('-') "
- Array.push() - It insect the element in the ==last== of the array.
- Array.unshift() - It insect the elements in the _First_ of the Array.

**Optial Chaining**

```js
const person = {
  name: {
    first: "Alice",
    last: "Johnson",
  },
  age: 28,
  favoriteColors: ["blue", "green"],
  // place : {
  //     city : "Chennai"
  // }
};

console.log(person.name.fullName);

if (person.place && person.place.city) {
  console.log(person.place.city);
}

console.log(person?.place?.city);
```

---

**Optional Changing**

```js
person?.place?.city;
```

**Nullish coalescing operator (??)**

**Ternary Operator**

```js
condition ? exprIfTrue : exprIfFalse;
```

---

---

# Day 4

**Hoisting**

- Var , Function - Hoisted.
- let , const - Not Hoisted.

**Java Script is a JIT - Just In Time Compilation.**

- In this JLT have to phase.
- 1st Phase - Compilation.
- 2nd Phase - Exection.

_JavaScript Engine have Two Phases are JS and Exicution Engine_

**TDZ - Temporal Dead Zone.**

```js
var price = 200;

function get() {
  // TDZ - Temporal Dead Zone.
  console.log(price);
  let price = 400;
  console.log(price);
}
get();
```

**Predicate function are which returns a Boolean**
**Array.map()**

- Its always returns copy of the Array.
- sourceArray.length === outputArray.length -> true
- Transforms data type

**Array.filter()**

- It always returns copy of the array
- sourceArray.length >= outputArray.length -> true
- input data type === output data type

**https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array**

**Imperative vs Declarative**

| Imperative                             | Declarative                                 |
| -------------------------------------- | ------------------------------------------- |
| How To do.                             | What to do.                                 |
| Increses the code length.              | Reduces the Logics.                         |
| It will increase the serimoial things. | It will reduce the extra serimonial things. |

**Array Function**
**Ex - 7**

```js
const players = [
  { name: "Alice", skills: ["defense", "speed"] },
  { name: "Bob", skills: ["speed", "attack", "strategy"] },
  { name: "Charlie", skills: ["speed", "attack"] },
  { name: "David", skills: ["strategy", "defense", "speed"] },
  { name: "Eva", skills: ["speed", "strategy"] },
];

const requiredSkills = ["speed", "strategy"];

// Output
// Bob, David, Eva

const recommendskills = players
  .filter((player) =>
    requiredSkills.every((skill) => player.skills.includes(skill))
  )
  .map((x) => x.name)
  .join(",");

console.log(recommendskills);
```

**Ex - 8**

```js
// Ex 8: Employess Promotion (more than 80 eligible)
const employes = [
  { id: 1, name: "Alice", grade: 78 },
  { id: 2, name: "Bob", grade: 85 },
  { id: 3, name: "Charlie", grade: 92 },
  { id: 4, name: "David", grade: 88 },
  { id: 5, name: "Eva", grade: 76 },
];

// This should output:
// [{ id: 2, status: 'Promoted' }, { id: 3, status: 'Promoted' }, { id: 4, status: 'Promoted' }]

const statusout = employes
  .filter((out) => out.grade > 80)
  .map(({ id }) => ({ id: id, status: "Promoted" })); // Object Destructuring
console.log(statusout);
```

**Ex - 9**

```js
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 88 },
  { name: "David", score: 79 },
  { name: "Eva", score: 95 },
];

const ranks = students
  .toSorted((a, b) => b.score - a.score)
  .map((x) => x.name)
  .toSpliced(3)
  .join(", ");
console.log(ranks);
```

---

---

# Day 5

**Ex - 10**

```js
// Ex10: Use ES6 feature to refactor the code
function getUserSubscriptionInfo(user) {
  let plan = user?.subscription?.plan?.name || "No Plan";
  let status = user?.subscription?.status || "Inactive";
  return { plan, status };
}
// Example user object
const user = {
  id: "123",
  name: "Alice",
  subscription: {
    plan: { name: "Premium" },
    status: "Active",
  },
};
console.log(getUserSubscriptionInfo(user));
```

## JSON

**Kotlin**

- Is inverted by the Google.
  **Swift**
- It is usedin the Iphone.

_JSON is a Loose Coupling_

_JSON is a Universal Gloy_

**https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON**

```js
const user = {
  id: "123",
  name: "Alice",
  subscription: {
    plan: { name: "Premium" },
    status: "Active",
  },
};

JSON.stringify(user);
```

**JIRA**

- It is a Tickect Flatform.

## GIT

- git fetch --all
- git branch -D branch_name
- git --graph

---

---

# Task 3

## GIT

- git fetch --all
- git branch -D branch_name
- git --graph

- How to delete the Commit ?

````
git reset --soft HEAD~ || git reset --soft HEAD^ - For Deleting the last commit in the vscode
but not in the github repositories.
for last commits to delete use the command git reset --soft HEAD~2```
````

**https://www.atlassian.com/git/glossary#terminology**

**GitHub Fork**

- With Command Lines "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo?tool=cli"

- https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo
- Fork the repository.
- Make the fix.
- Submit a pull request to the project owner.

---

---

# REFACTORING CODE WITH OPTIONAL CHAINING

## TASK 1: USER PROFILE ACCESS

```js
function getUserEmail(user) {
  for (var item of user) {
    console.log(
      item?.contact?.email ? item?.contact?.email : "email not provided"
    );
  }
}

const user = [
  {
    name: "Smith",
    contact: {
      email: "all@example.com",
    },
  },
  {
    name: "Bob",
  },
];
getUserEmail(user);
```

## TASK 2: NESTED DATA RETRIEVAL

```js
const company = {
  departments: [
    {
      name: "Engineering",
      manager: { name: "Manoj" },
    },
    {
      name: "Sales",
      manager: { name: "RDX" },
    },
  ],
};

function getDepartmentManager(company, departmentName) {
  const department = company?.departments?.find(
    (dept) => dept.name === departmentName
  )?.manager?.name;
  return department || "Manager not found";
}
console.log(getDepartmentManager(company, "Engineering"));
```

## TASK 3: PRODUCT INVENTORY CHECK

````js
const stock = [
  { inventory: { count: 1 }, name: "Prod 1" },
  { inventory: { count: 0 }, name: "Prod 2" },
  { inventory: { count: 1 }, name: "Prod 3" },
  { inventory: { count: 0 }, name: "Prod 4" },
  { inventory: { count: 10 }, name: "Prod 5" },
];

function isProductInStock(stock) {
  for (var prod of stock) {
    console.log(
      prod?.inventory?.count ? "Product Available" : "Product not in stock"
    );
  }
}

isProductInStock(stock);```

## TASK 4: OPTIONAL CHAINING WITH ARRAYS

```js
const matrix = [
  [11, 23, 33],
  [42, 55, 64],
  [73, 82, 92],
];

const getMatrixElement = (matrix, row, col) => {
  var element = matrix?.[row]?.[col] || "Element not found";
  return element;
};
console.log(getMatrixElement(matrix, 2, 1));
````

---

---

# Weekend Task

## Task -1

```js
function idTransactions(trans) {
  let categorys = "Business";
  var cate = transactions.find(
    (cate) =>
      cate.category === categorys &&
      cate.amount >= 5000 &&
      cate.date.slice(0, 4) == "2023"
  );
  return `Transaction ${cate.id}: $${cate.amount} on ${cate.date}`;
}
const transactions = [
  { id: "T1", category: "Personal", amount: 3000, date: "2023-01-15" },
  { id: "T2", category: "Business", amount: 6500, date: "2023-02-20" },
  { id: "T3", category: "Business", amount: 4500, date: "2023-03-05" },
  // more transactions...
];

console.log(idTransactions(transactions));
```

## Task -2

```js
const departments = [
  { name: "Engineering", employees: [{ salary: 80000 }, { salary: 90000 }] },
  { name: "Marketing", employees: [{ salary: 60000 }, { salary: 65000 }] },
  // more departments...
];

const depts = departments.map((dept) => {
  const total = dept.employees.reduce((sum, emp) => sum + emp.salary, 0);
  return `[{"${dept.name}" : ${total}}]`;
});

console.log(depts);
```

## Task -3

```js
const weatherData = [
  { date: "2023-03-01", temperature: 16 },
  { date: "2023-03-02", temperature: 20 },
  { date: "2023-03-03", temperature: 18 },
  // more data...
];

const order = weatherData.sort((a, b) => b.temperature - a.temperature);
const arrayof = {};
for (const item of order) {
  arrayof[item.date] = item.temperature;
}
console.log(arrayof);
```

## TAsk -4

```js
const products = [
  { category: "Electronics", price: 199.99, reviews: 120, rating: 4.5 },
  { category: "Electronics", price: 89.99, reviews: 80, rating: 3.9 },
  { category: "Home", price: 49.99, reviews: 30, rating: 4.2 },
  // more products...
];

const cate = products
  .filter(
    (cate) =>
      cate.category === "Electronics" &&
      cate.reviews >= 50 &&
      cate.rating >= 4.0
  )
  .map((cate) => cate.price);
const avg = cate.reduce((acc, cur) => acc + cur, 0) / cate.length;
console.log(avg);
```

## Task -5

```js
const users = [
  { userId: "U1", name: "Alice" },
  { userId: "U2", name: "Bob" },
  // more users...
];
const orders = [
  { userId: "U1", orderDetails: "Order 1 Details" },
  { userId: "U2", orderDetails: "Order 2 Details" },
  // more orders...
];

const combinedUSerOrder = users
  .map((item, i) => Object.assign({}, item, orders[i]))
  .map((combined) => ({
    name: combined.name,
    orderDetails: combined.orderDetails,
  }));
console.log(combinedUSerOrder);
```

# ADVANCED JAVASCRIPT ARRAY METHODS ASSIGNMENT II

## TASK 1: CONSOLIDATING EVENT ATTENDEES

```js
const event1Attendees = ["Alice", "Bob", "Charlie"];
const event2Attendees = ["Bob", "Dave", "Eve"];
const event3Attendees = ["Charlie", "Eve", "Frank"];

const event4Attendees = event1Attendees.concat(
  event2Attendees,
  event3Attendees
);
const nonDublicate = [...new Set(event4Attendees)]; // This method sets a new object type with ES6 (ES2015) that allows you to create collections of unique values.
console.log(event4Attendees);
console.log(nonDublicate);
```

## TASK 2: ANALYZING SURVEY RESPONSES

```js

```

## TASK 3: FILTERING AND MAPPING BOOK DATA

## TASK 4: COMPLEX PRODUCT INVENTORY ANALYSIS

```js
const products = [
  {
    name: "Product 1",
    stores: [
      { storeId: "S1", inventory: 10 },
      { storeId: "S2", inventory: 0 },
    ],
  },
  {
    name: "Product 2",
    stores: [
      { storeId: "S1", inventory: 5 },
      { storeId: "S2", inventory: 7 },
    ],
  },
];

const proInventory = products
  .filter((prod) => prod.stores.every((e) => e.inventory > 0))
  .map((n) => n.name);

console.log(proInventory);
```

## TASK 5: CREATING A NESTED COMMENT THREAD

```js

```

---

---

# Day 6

**setTimeout()**

```js
setTimeout(function () {
  console.log("Food 🍔🍕");
}, 2000);
```

**setIntervel()**

```js
setIntervel(function () {
  console.log("Food 🍔🍕");
}, 2000);
```
