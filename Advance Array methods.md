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

```js
const books = [
  { title: "Book A", author: "Author 1", year: 1999 },
  { title: "Book B", author: "Author 2", year: 2005 },
  { title: "Book C", author: "Author 3", year: 2001 },
  // more books...
];

//Solution
console.log(
  books
    .filter((obj) => obj.year > 2000)
    .map((obj1) => `${obj1.title} by ${obj1.author}`)
);
```

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
