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
