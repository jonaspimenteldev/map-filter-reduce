const users = [
  {
    name: "Jonas",
    type: "administrador",
  },
  {
    name: "João",
    type: "master",
  },
  {
    name: "José",
    type: "user",
    age: 1,
  },
];

let buscarUser = users.find((user) => user.type === "administrador");

console.log(buscarUser);

// Exemplo 2 usando findIndex

let buscarUserExemplo2 = users[users.findIndex((user) => user.type == "administrador")];

console.log(buscarUserExemplo2);