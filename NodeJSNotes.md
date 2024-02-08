# Node JS

- It a Environment of running JS.

**Why we are using the nodeJS?**

- We cannot delete,update,insecrtion,creation.
- Browsers have restricted,Because the virus will transfer by the browsers.

**Virus**

- Warm
- Love
- Rendering

```js
const os = require("os");
const mul = (n, m) => parseInt(n) + parseInt(m);
const argument = process.argv;
// console.log(argument);
console.log(mul(argument[2], [3]));
// console.log(global);
```

```js
const os = require("os");

function memory(num) {
  return `${(num / 1024 / 1024 / 1024).toFixed(2)} GB`;
}
console.log("Free Space : ", memory(os.freemem()));
console.log("Total Space : ", memory(os.totalmem()));
console.log("Version : ", os.version());
console.log("Processor : ", os.cpus());
```

```js

```
