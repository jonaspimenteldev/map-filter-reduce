const users = [
  {
    name: "Jonas",
    type: "administrador",
  },
  {
    name: "João",
    type: "user",
  },
  {
    name: "José",
    type: "user",
    age: 1,
  },
];

/**
 * 
 *  forEach
 *  Não retorna um novo array com a mesma quantidade de elementos
 *
 * */

 const UsersPermissions = []

users.forEach((user) => {
    UsersPermissions.push(user.type)
});

console.log(UsersPermissions);
// [ 'administrador', 'user', 'user' ]
