const data1 = {
  name: "Neha",
  avatar:
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/532.jpg",
};

const data2 = {
  name: "ESha",
  avatar:
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/533.jpg",
};

const data3 = {
  name: "Ram",
  avatar:
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/534.jpg",
};

const data4 = {
  name: "Vamsi",
  avatar:
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/535.jpg",
};

async function postData(data = {}) {
  const response = await fetch(
    `https://65bb5d0152189914b5bbdb1e.mockapi.io/users`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return await response.json();
}

Promise.allSettled([
  postData(data1),
  postData(data2),
  postData(data3),
  postData(data4),
])
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
