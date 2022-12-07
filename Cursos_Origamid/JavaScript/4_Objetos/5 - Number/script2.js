



// Retorne um número aleatório
// entre 1050 e 2000

const max = 2000;
const min = 1050;
const numero = Math.floor(Math.random() * (max - min + 1) + min);
console.log(numero);





// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const maiorNumero = numeros.split(", ");
console.log(Math.max(...maiorNumero));





// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

function limpaPreco(preco) {
  preco = +preco.toUpperCase().replace("R$ ", "").replace(",", ".").trim();
  preco = +preco.toFixed(2);
  return preco;
}

let total = 0;

listaPrecos.forEach((item) => {
  total += limpaPreco(item);
});
console.log(total);


