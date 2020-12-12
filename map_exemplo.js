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
 *  Retorna um novo array com a mesma quantidade de elementos que o array inicial 
 * 
 * */ 

// Exemplo 1
const UsersPermissions = users.map(({ type }) => type);

console.log(UsersPermissions);
// [ 'administrador', 'user', 'user' ]
