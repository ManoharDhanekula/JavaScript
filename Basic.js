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
