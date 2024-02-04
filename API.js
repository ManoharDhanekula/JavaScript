// fetch(`https://65bb5d0152189914b5bbdb1e.mockapi.io/users`)
//   .then((x) => x.json())
//   .then((x) => x.map((x) => x).toSpliced(0, 3))
//   .then((x) => console.log(x));

(async function deleteFirstThree() {
  const data = await fetch(`https://65bb5d0152189914b5bbdb1e.mockapi.io/users`);
  const file = data.json().then((x) =>
    x
      .slice(0, 3)
      .map((x) => x.id)
      .forEach(userids())
  );
})();
function userids(element) {
  return (element) => {
    const ids = fetch(
      `https://65bb5d0152189914b5bbdb1e.mockapi.io/users/${element}`,
      {
        method: "Delete",
      }
    );
    console.log(element);
  };
}
