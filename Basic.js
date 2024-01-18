let moive = (domain, genre, year) =>
  `http://${domain}?genere=${genre}&year=${year}`;
console.log(moive("imdb.com", "thriller", 2020));

// default
// const [t1, t2, t3 = 80] = [100, 200];
// console.log(t1, t2, t3);

//holes
const [, t1, t2, t3 = 80] = [100, 200, null];
console.log(t1, t2);

const { name, person, skill } = {
  Name: "Mano",
  Gender: "M",
  Person: "Happy",
};
console.log(name, person, skill);
