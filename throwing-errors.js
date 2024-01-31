const getToDos = async () => {
  const repsonse = await fetch("todos/luigi.json");
  const data = await repsonse.json();
  return data;
};

console.log(1);
console.log(2);
getToDos().then((data) => console.log("resolved:", data));

console.log(3);
