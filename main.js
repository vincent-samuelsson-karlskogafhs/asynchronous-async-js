// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log("call back fired");
// }, 2000);

// console.log(3);
// console.log(4);

const getToDos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      //   console.log(request, request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

getToDos("todos/luigi.json")
  .then((data) => {
    console.log("promise 1 resolved:", data);
    return getToDos("todos/mario.json");
  })
  .then((data) => {
    console.log("promise 2 resolved", data);
    return getToDos("todos/shaun.json");
  })
  .then((data) => {
    console.log("promise 3 resolved");
  })
  .catch((err) => {
    console.log("promise rejected:", err);
  });

// skicka ny promise request - temp

const getSomething = () => {
  return new Promise((resolve, reject) => {
    // fetch something - document - resolve - sucess or error - parrameter - build in promisses - in JS
    resolve("some data");
    // reject("some error");
  });
};

// getToDos("todos/luigi.json", (err, data) => {
//   console.log(data);
//   getToDos("todos/mario.json", (err, data) => {
//     console.log(data);
//     getToDos("todos/shaun.json", (err, data) => {
//       console.log(data);
//     });
//   });
// });

// hämta data med function "data"
// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
// function - get data, logg saved data (err)
// .catch((err) => {
//   console.log(err);
// });
