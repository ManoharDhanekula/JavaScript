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

**Task 1**

What is Difference B/w Parameters and Arguments?

| Parameters | Arguments |
| ---------- | --------- |
| Header     | Title     |
| Paragraph  | Text      |

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
