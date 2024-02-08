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
