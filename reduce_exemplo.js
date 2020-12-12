const produtos = [
  {
    name: "Tênis",
    valor: 149,
  },
  {
    name: "Mochila",
    valor: 89.90,
  },
  {
    name: "Cinto",
    valor: 19,
  },
];

const totalProdutos = produtos.reduce((total, produto) => {
    return total + produto.valor
}, 0);

console.log(totalProdutos);