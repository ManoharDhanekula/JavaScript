# Task 1

- What did they Solve the HTTP - 2?
  HTTP/2 is much faster and more efficient than HTTP/1.One of the ways in which HTTP/2 is faster is in how it prioritizes content during the loading process.
  HTTP - (CRUD)- Create,Read,Upadate,Delete.
  HTML -> HTML PARSER -> DOM(Document Object Model)
- How did they solve the head of the Blocking?
  HTTP Head of line blocking solved by multiplexing request over the same TCP Connection.

# Task 2

What is Difference B/w Parameters and Arguments?

| Parameters                                                                                           | Arguments                                                                             |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| The values that are declared within a function when the function is called are known as an argument. | The variables that are defined when the function is declared are known as parameters. |
| Actual Parameters                                                                                    | Formal Parameters.                                                                    |

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

**Git Merge vs Rebase**

Merge

Rebase - Its commits in linner and cleaner manner.

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

---

---

# Race in Promise

```js
var f1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Manoj ");
  }, 5000);
});
var f2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Neha");
  }, 2000);
});
var f3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Bhavani ");
  }, 3000);
});

Promise.race([f1, f2, f3])
  .then((d) => console.log(d))
  .catch((s) => console.log(s));
```

# all method in Promise Function

```js
var f1 = Promise.resolve("Bhavani");
var f2 = Promise.reject("Manoj");
var f3 = Promise.resolve("Neha");

Promise.all([f1, f2, f3])
  .then((d) => console.log(d))
  .catch((s) => console.log(s));
```

- all method have if one rejects happen all the meaning will not check it just print the reject one output.

# allSettled method in Promise Function

```js
var f1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Manoj ");
  }, 5000);
});
var f2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Neha");
  }, 2000);
});
var f3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Bhavani ");
  }, 3000);
});

Promise.allSettled([f1, f2, f3])
  .then((d) => console.log(d))
  .catch((s) => console.log(s));
```

- Even if error also it will print the out with the fullfield and rejected status and with value and reason it get an output of Array object.
