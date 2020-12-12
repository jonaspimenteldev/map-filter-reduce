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
  }
];


// Exemplo 1

const isAdmin = (type) => {
    return type === 'administrador'
}

const UsersPermissions = users.filter(( { type } ) =>  isAdmin(type) )

console.log(UsersPermissions);
//[ { name: 'Jonas', type: 'administrador' } ]


// Exemplo 2

const regra = (type) => {
  return (type.filter((rule) => rule.type === "administrador" || rule.type === "master").length > 0);
};

const verificarAdmin = regra(users);

console.log(verificarAdmin);
//true