// Task -1

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

//Task -2

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

// Task -3

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

//TAsk -4

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

// Task -5

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
