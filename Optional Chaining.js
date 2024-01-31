// TASK 1: USER PROFILE ACCESS

js;
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

// TASK 2: NESTED DATA RETRIEVAL

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

//TASK 3: PRODUCT INVENTORY CHECK

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

isProductInStock(stock);

// TASK 4: OPTIONAL CHAINING WITH ARRAYS

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
