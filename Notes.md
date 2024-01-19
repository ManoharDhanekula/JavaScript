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
