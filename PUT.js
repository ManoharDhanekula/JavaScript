const data = {
  name: "Neha",
  avatar: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
};
// async function postData(data = {}) {
//   const response = await fetch(
//     `https://65bb5d0152189914b5bbdb1e.mockapi.io/users`,
//     {
//       method: "",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     }
//   );

//   return await response.json();
// }

// Promise.allSettled([
//   postData(data1),
//   postData(data2),
//   postData(data3),
//   postData(data4),
// ])
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
(async function deleteFirstThree() {
  const data = await fetch(`https://65bb5d0152189914b5bbdb1e.mockapi.io/users`);
  const file = data.json().then((x) => x.map((x) => x.id).forEach(userids()));
})();
function userids() {
  return (element) => {
    const ids = fetch(
      `https://65bb5d0152189914b5bbdb1e.mockapi.io/users/${element}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
  };

  console.log(element);
}
