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
