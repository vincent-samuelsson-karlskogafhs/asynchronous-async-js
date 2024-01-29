// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log("call back fired");
// }, 2000);

// console.log(3);
// console.log(4);

const getToDos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    //   console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  request.open("GET", "todos.json");
  request.send();
};

console.log(1);
console.log(2);

getToDos((err, data) => {
  console.log("callback fired");
  console.log(err, data);
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);
