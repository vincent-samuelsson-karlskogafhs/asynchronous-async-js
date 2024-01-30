// assync ger alltid promise som retur
const getToDos = async () => {
  const repsonse = await fetch("todos/luigi.json");
  const data = await repsonse.json();
  return data;
};

console.log(1);
console.log(2);
getToDos().then((data) => console.log("resolved:", data));

console.log(3);
console.log(4);

// fetch("todos/luigi.json")
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });
