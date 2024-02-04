// // let moive = (domain, genre, year) =>
// //   `http://${domain}?genere=${genre}&year=${year}`;
// // console.log(moive("imdb.com", "thriller", 2020));

// // // default
// // // const [t1, t2, t3 = 80] = [100, 200];
// // // console.log(t1, t2, t3);

// // //holes
// // const [, t1, t2, t3 = 80] = [100, 200, null];
// // console.log(t1, t2);

// // const { name, person, skill } = {
// //   Name: "Mano",
// //   Gender: "M",
// //   Person: "Happy",
// // };
// // console.log(name, person, skill);

// const cart = [
//   { name: "Apple", price: 0.5, quantity: 4 },
//   { name: "Banana", price: 0.25, quantity: 6 },
// ];

// const newItems = [
//   { name: "Cherry", price: 0.75, quantity: 5 },
//   { name: "Date", price: 1, quantity: 3 },
// ];

// const children = cart.concat(newItems);
// console.log(children);

// function calucation1() {
//   let sum = 0;
//   for (let i = 0; i < children.length; i++) {
//     sum += children[i].price * children[i].quantity;
//   }
//   console.log(sum);
// }

// function calucation(children) {
//   let sum = 0;
//   for (let item of children) {
//     sum += item.price * item.quantity;
//   }
//   return sum;
// }

// console.log("Total of Cart : ", calucation(children));

// const library = [
//   {
//     title: "The Great Gatsby",
//     authors: ["F. Scott Fitzgerald"],
//     borrowed: true,
//   },
//   { title: "To Kill a Mockingbird", authors: ["Harper Lee"], borrowed: true },
//   { title: "1984", authors: ["George Orwell"], borrowed: true },
//   { title: "The Hobbit", authors: ["J.R.R. Tolkien"], borrowed: true },
//   { title: "Brave New World", authors: ["Aldous Huxley"], borrowed: true },
// ];

// // Task 1: Determine if all books in the library have been borrowed.

// function borrowed9(library) {
//   let sum;
//   let arr = [];
//   for (let i = 0; i < library.length; i++) {
//     sum = library[i].borrowed;
//     arr.push(sum);
//   }
//   var Boolean = arr.includes(true);
//   if (Boolean == true) {
//     console.log("All books in the library have been borrowed.");
//   } else {
//     console.log("Not all books in the library have been borrowed.");
//   }
// }
// borrowed9(library);

// // Task 2: Determine if there are books in the library written by multiple authors

// Hoisting and Also Shadowing Local Variable

// var price = 200;

// function get() {
//   console.log(price);
//   let price = 400;
//   console.log(price);
// }
// get();

// const nums = [1, 2, 3];

// const output = nums.map((x) => x * 2);
// console.log(output);
// console.log(nums);

// const names = ["Mano", "RdX", "Raja"];

// var getLength = function (name) {
//   return names.length;
// };
// const strlen = names.map(getLength);
// console.log(strlen);

// const avengers = [
//   "Hulk",
//   "Iron man",
//   "Black widow",
//   "Captain america",
//   "Spider man",
//   "Thor",
// ];

// // Longer names which has 10 or more chars

// const strlen = avengers.filter((name) => name.length >= 10);
// console.log(strlen);

// Ex 6: Rating 4.7 and above | Recommendations List
// const books = [
//   { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
//   { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
//   { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
//   { title: "Sapiens", rating: 4.9, genre: "History" },
//   { title: "Clean Code", rating: 4.7, genre: "Technology" },
// ];

// // Output
// // ['A Brief History of Time', 'Clean Code', 'Sapiens' ]
// const recommendedbooks = books.filter((rate) => rate.rating >= 4.7);
// const recommendedauthor = recommendedbooks.map((n) => n.title);

// console.log(recommendedauthor);

// console.log([1, 2, 3].join("+"));

// Ex 7:
// const players = [
//   { name: "Alice", skills: ["defense", "speed"] },
//   { name: "Bob", skills: ["speed", "attack", "strategy"] },
//   { name: "Charlie", skills: ["speed", "attack"] },
//   { name: "David", skills: ["strategy", "defense", "speed"] },
//   { name: "Eva", skills: ["speed", "strategy"] },
// ];

// const requiredSkills = ["speed", "strategy"];

// // Output
// // Bob, David, Eva

// const recommendskills = players
//   .filter((player) =>
//     requiredSkills.every((skill) => player.skills.includes(skill))
//   )
//   .map((x) => x.name)
//   .join(", ");

// console.log(recommendskills);

// Ex 8: Employess Promotion (more than 80 eligible)
// const employes = [
//   { id: 1, name: "Alice", grade: 78 },
//   { id: 2, name: "Bob", grade: 85 },
//   { id: 3, name: "Charlie", grade: 92 },
//   { id: 4, name: "David", grade: 88 },
//   { id: 5, name: "Eva", grade: 76 },
// ];

// // This should output:
// // [{ id: 2, status: 'Promoted' }, { id: 3, status: 'Promoted' }, { id: 4, status: 'Promoted' }]

// const statusout = employes
//   .filter((out) => out.grade > 80)
//   .map(({ id }) => ({ id: id, status: "Promoted" })); // Object Destructuring
// console.log(statusout);

// Top 3 Students
// const students = [
//   { name: "Alice", score: 85 },
//   { name: "Bob", score: 92 },
//   { name: "Charlie", score: 88 },
//   { name: "David", score: 79 },
//   { name: "Eva", score: 95 },
// ];

// const ranks = students
//   .toSorted((a, b) => b.score - a.score)
//   .map((x) => x.name)
//   .toSpliced(3)
//   .join(", ");
// console.log(ranks);

// Ex10: Use ES6 feature to refactor the code
// function getUserSubscriptionInfo(user) {
//   let plan = user?.subscription?.plan?.name || "No Plan";
//   let status = user?.subscription?.status || "Inactive";
//   return { plan, status };
// }
// // Example user object
// const user = {
//   id: "123",
//   name: "Alice",
//   subscription: {
//     plan: { name: "Premium" },
//     status: "Active",
//   },
// };
// console.log(getUserSubscriptionInfo(user));

// let m = [1, 2, 3, 4, 5, 6];
// console.log(Math.max(1, 2, ...m));

// const company = {
//   departments: [
//     {
//       name: "Engineering",
//       manager: { name: "Manoj" },
//     },
//     {
//       name: "Sales",
//       manager: { name: "RDX" },
//     },
//   ],
// };

// function getDepartmentManager(company, departmentName) {
//   const department = company?.departments?.find(
//     cate) =>cate.name === departmentName
//   )?.manager?.name;
//   return department || "Manager not found";
// }
// console.log(getDepartmentManager(company, "Engineering"));

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const getMatrixElement = (matrix, row, col) => {
//   var element = matrix?.[row]?.[col] || "Element not found";
//   return element;
// };
// console.log(getMatrixElement(matrix, 2, 1));

// const stock = [
//   { inventory: { count: 1 }, name: "Prod 1" },
//   { inventory: { count: 0 }, name: "Prod 2" },
//   { inventory: { count: 1 }, name: "Prod 3" },
//   { inventory: { count: 0 }, name: "Prod 4" },
//   { inventory: { count: 10 }, name: "Prod 5" },
// ];

// function isProductInStock(stock) {
//   for (var prod of stock) {
//     console.log(
//       prod?.inventory?.count ? "Product Available" : "Product not in stock"
//     );
//   }
// }

// isProductInStock(stock);

// function getUserEmail(user) {
//   for (var item of user) {
//     console.log(
//       item?.contact?.email ? item?.contact?.email : "email not provided"
//     );
//   }
// }

// const user = [
//   {
//     name: "Smith",
//     contact: {
//       email: "all@example.com",
//     },
//   },
//   {
//     name: "Bob",
//   },
// ];
// getUserEmail(user);
// function idTransactions(trans) {
//   let categorys = "Business";
//   var cate = transactions.find(
//     (cate) =>
//       cate.category === categorys &&
//       cate.amount >= 5000 &&
//       cate.date.slice(0, 4) == "2023"
//   );
//   return `Transaction ${cate.id}: $${cate.amount} on ${cate.date}`;
// }
// const transactions = [
//   { id: "T1", category: "Personal", amount: 3000, date: "2023-01-15" },
//   { id: "T2", category: "Business", amount: 6500, date: "2023-02-20" },
//   { id: "T3", category: "Business", amount: 4500, date: "2023-03-05" },
//   // more transactions...
// ];

// console.log(idTransactions(transactions));

// const departments = [
//   { name: "Engineering", employees: [{ salary: 80000 }, { salary: 90000 }] },
//   { name: "Marketing", employees: [{ salary: 60000 }, { salary: 65000 }] },
//   // more departments...
// ];

// const depts = departments.map((dept) => {
//   const total = dept.employees.reduce((sum, emp) => sum + emp.salary, 0);
//   return `[{"${dept.name}" : ${total}}]`;
// });

// console.log(depts);

// const weatherData = [
//   { date: "2023-03-01", temperature: 16 },
//   { date: "2023-03-02", temperature: 20 },
//   { date: "2023-03-03", temperature: 18 },
//   // more data...
// ];

// const order = weatherData.sort((a, b) => b.temperature - a.temperature);
// const arrayof = {};
// for (const item of order) {
//   arrayof[item.date] = item.temperature;
// }
// console.log(arrayof);

// const products = [
//   { category: "Electronics", price: 199.99, reviews: 120, rating: 4.5 },
//   { category: "Electronics", price: 89.99, reviews: 80, rating: 3.9 },
//   { category: "Home", price: 49.99, reviews: 30, rating: 4.2 },
//   // more products...
// ];

// const cate = products
//   .filter(
//     (cate) =>
//       cate.category === "Electronics" &&
//       cate.reviews >= 50 &&
//       cate.rating >= 4.0
//   )
//   .map((cate) => cate.price);
// const avg = cate.reduce((acc, cur) => acc + cur, 0) / cate.length;
// console.log(avg);

// const users = [
//   { userId: "U1", name: "Alice" },
//   { userId: "U2", name: "Bob" },
//   // more users...
// ];
// const orders = [
//   { userId: "U1", orderDetails: "Order 1 Details" },
//   { userId: "U2", orderDetails: "Order 2 Details" },
//   // more orders...
// ];

// const combinedUSerOrder = users
//   .map((item, i) => Object.assign({}, item, orders[i]))
//   .map((combined) => ({
//     name: combined.name,
//     orderDetails: combined.orderDetails,
//   }));
// console.log(combinedUSerOrder);

// const event1Attendees = ["Alice", "Bob", "Charlie"];
// const event2Attendees = ["Bob", "Dave", "Eve"];
// const event3Attendees = ["Charlie", "Eve", "Frank"];

// const event4Attendees = event1Attendees.concat(
//   event2Attendees,
//   event3Attendees
// );
// const nonDublicate = [...new Set(event4Attendees)];
// console.log(nonDublicate.toSorted());

// const surveyResponses = [
//   { topics: ["Environment", "Economy"], rating: 4 },
//   { topics: ["Economy", "Health"], rating: 3 },
//   { topics: ["Environment", "Politics"], rating: 5 },
// ];

// //  Step 1
// var step1 = {
//   Environment: [4, 5],
//   Economy: [4, 3],
//   Health: [3],
//   Politics: [5],
// };

// var step2 = { Environment: 4.5, Economy: 3.5, Health: 3, Politics: 5 };

// const report = surveyResponses.reduce()

// console.log(report);

// const products = [
//   {
//     name: "Product 1",
//     stores: [
//       { storeId: "S1", inventory: 10 },
//       { storeId: "S2", inventory: 0 },
//     ],
//   },
//   {
//     name: "Product 2",
//     stores: [
//       { storeId: "S1", inventory: 5 },
//       { storeId: "S2", inventory: 7 },
//     ],
//   },
// ];

// const proInventory = products
//   .filter((prod) => prod.stores.every((e) => e.inventory > 0))
//   .map((n) => n.name);

// console.log(proInventory);

// const books = [
//   { title: "Book A", author: "Author 1", year: 1999 },
//   { title: "Book B", author: "Author 2", year: 2005 },
//   { title: "Book C", author: "Author 3", year: 2001 },
//   // more books...
// ];

// const comments = [
//   { commentId: "c1", text: "Comment 1" },
//   { commentId: "c2", text: "Comment 2", replyTo: "c1" },
//   { commentId: "c3", text: "Comment 3" },
//   // more comments...
// ];

// function msgRepect(nOfThings) {
//   const msgInterval = setInterval(function () {
//     console.log("Hello");
//   }, 2000);
//   setInterval(() => clearInterval(msgInterval), nOfThings * 2000);
// }

// msgRepect(4);
// var colors = ["red", "purple", "green"];
// function slideShow(colors) {
//   const msgInterval = setInterval(function () {
//     let i = 0;
//     if (i > colors.length) {
//       i = 0;
//     }
//     console.log(`%c ${colors[i]}`, `color: ${colors[i]}`);
//     i++;
//   }, 2000);
// }

// slideShow(colors);

// setTimeout(() => {
//   console.log("Hello");
//   setTimeout(() => {
//     console.log("Hello");
//     setTimeout(() => {
//       console.log("Hello");
//     }, 2000);
//   }, 2000);
// }, 2000);

///var count = 10;

// setInterval(newyear, 2000);

// function newyear(count) {
//   let sub = 0;
//   if (sub <= 10) {
//     console.log(count);
//     count = count - sub;
//     sub++;
//   } else {
//     console.log("Happy New Year");
//     clearInterval();
//   }
// }
// newyear(count);

// setTimeout(() => {
//   console.log(count);
//   setTimeout(() => {
//     console.log(--count);
//     setTimeout(() => {
//       console.log(--count);
//       setTimeout(() => {
//         console.log(--count);
//         setTimeout(() => {
//           console.log(--count);
//           setTimeout(() => {
//             console.log(--count);
//             setTimeout(() => {
//               console.log(--count);
//               setTimeout(() => {
//                 console.log(--count);
//                 setTimeout(() => {
//                   console.log(--count);
//                   setTimeout(() => {
//                     console.log(--count);
// setTimeout(() => {
//   console.log("Happy New Year 🎉");
// }, 1000);
//                   }, 1000);
//                 }, 1000);
//               }, 1000);
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// var drivingTest = new Promise((resolve, reject) => {
//   let age = 20;
//   console.log(typeof reject);
//   if (age >= 18) {
//     resolve("Your are Eligible ");
//   } else {
//     reject("Try After some Years");
//   }
// });

// console.log(drivingTest);

// var drivingTest = new Promise((resolve, reject) => {
//   let age = 18;
//   console.log(typeof reject);
//   if (age >= 18) {
//     resolve("Your are Eligible ");
//   } else {
//     reject("Try After some Years");
//   }
// });

// console.log(drivingTest);

// var drivingTest = new Promise((resolve, reject) => {
//   let age = 10;
//   if (age >= 18) {
//     setTimeout(() => {
//       resolve("Your are Eligible ");
//     }, 5000);
//   } else {
//     reject("Try After some Years");
//   }
// });
// console.log("Test Started");
// drivingTest
//   .then((msg) => "Your Result is : " + msg)
//   .then((x) => x + "Super 🎉🙌🎉")
//   .then((x) => console.log("Finally,", x))
//   .catch((msg) => console.log("Oh no : " + msg))
//   .finally((x) => console.log("Clear : "))
//   .catch();

// fetch(`https://restcountries.com/v3.1/all`)
//   .then((x) => x.json())
//   .then((x) =>
//     x.filter((data) => data.region == "Europe").map((x) => x.name.common)
//   )
//   .then((result) => console.log(result));

// fetch(`https://restcountries.com/v3.1/all`)
//   .then((x) => x.json())
//   .then((x) =>
//     x.sort((a, b) => b.population - a.population).map((x) => x.name.common)
//   )
//   .then((result) => console.log(result));

// fetch(`https://restcountries.com/v3.1/all`)
//   .then((x) => x.json())
//   .then((x) =>
//     x
//       .ToSorted((a, b) => b.population - a.population)
//       .map((x, i) => console.log(`${i + 1}.${x.name.common} - ${x.population}`))
//   );
// .then((result) => console.log(result));

// fetch(`https://restcountries.com/v3.1/all`)
//   .then((x) => x.json())
//   .then((x) =>
//     x
//       .toSorted((a, b) => b.population - a.population)
//       .slice(0, 10)
//       .map((x, i) => `${i + 1}.${x.name.common} - ${x.population}`)
//       .join("\n")
//   )
//   .then((result) => console.log(result));

// var f1 = Promise.resolve("Bhavani");
// var f2 = Promise.resolve("Manoj");
// var f3 = Promise.resolve("Neha");

// Promise.all([f1, f2, f3])
//   .then((d) => console.log(d))
//   .catch((s) => console.log(s));

// var f1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Manoj ");
//   }, 5000);
// });
// var f2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Neha");
//   }, 2000);
// });
// var f3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Bhavani ");
//   }, 3000);
// });

// Promise.allSettled([f1, f2, f3]).then((d) => console.log(d));
// .catch((s) => console.log(s));

// var f1 = fetch(
//   `http://api.weatherapi.com/v1/current.json?key=d330ceb9f182465dbff45041240102&q=Chennai&aqi=no`
// )
//   .then((x) => x.json())
//   .then(
//     (x) =>
//       `${x.location.name} : ${x.current.temp_c}.0%c , ${x.current.temp_f}.0%f `
//   );

// var f2 = fetch(
//   `http://api.weatherapi.com/v1/current.json?key=d330ceb9f182465dbff45041240102&q=madurai&aqi=no`
// )
//   .then((x) => x.json())
//   .then(
//     (x) =>
//       `${x.location.name} : ${x.current.temp_c}.0%c , ${x.current.temp_f}.0%f `
//   );

// var f3 = fetch(
//   `http://api.weatherapi.com/v1/current.json?key=d330ceb9f182465dbff45041240102&q=Guntur&aqi=no`
// )
//   .then((x) => x.json())
//   .then(
//     (x) =>
//       `${x.location.name} : ${x.current.temp_c}.0%c , ${x.current.temp_f}.0%f `
//   );

// Promise.all([f1, f2, f3]).then((x) => console.log(...x,...x));

// const citys = ["madurai", "Chennai", "Guntur"];
// async function getTemp(city) {
//   try {
//     const file = await fetch(
//       `http://api.weatherapi.com/v1/current.json?key=d330ceb9f182465dbff45041240102&q=${city}&aqi=no`
//     ).catch((e)=>console.log(e));
//     const data = await file.json();
//     return [data.location.name, data.current.temp_c];
//   } catch (e) {
//     console.log(e);
//   }
// }
// const output = await Promise.all(citys.map(getTemp));

// console.log(Object.fromEntries(output));

// (async function getTemps() {
//   const output = await Promise.all(citys.map(getTemp));
//   console.log(Object.fromEntries(output));
// })();
