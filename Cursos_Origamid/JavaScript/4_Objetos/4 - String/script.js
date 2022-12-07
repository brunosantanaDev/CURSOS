
const comida = "Pizza";
const bebida = new String("agua");


const fruta = "Banana";
const listaFrutas = ". Melancia, Banana, Laranja ";
//console.log(listaFrutas.includes(fruta));


const arrayFrutas = ['Pera', 'Uva', 'Maça'];
//console.log(arrayFrutas.includes("Maça"));


//console.log(fruta.endsWith("a1na"));
//console.log(fruta.startsWith("a1na"));

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

//console.log(transacao3.slice(2, -2));


const preco = "2806";

//console.log(preco.padStart(16, "*"));





// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let totalTaxa = 0;
let totalRec = 0;

transacoes.forEach((item) => {
  const preco = +item.valor.replace("R$ ", "");
  const desc = item.descricao.toLocaleLowerCase().trim().slice(0, 4);

  if (desc === "taxa") {
    totalTaxa += preco;
  } else {
    totalRec += preco;
  }
});

console.log(`O total de Taxa é: R$${totalTaxa}`);
console.log(`O total de Recebimento é: R$${totalRec}`);





// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
console.log(transportes.split(";"));



// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;


const arrayHtml = html.split("span").join("a");
console.log(arrayHtml);




// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.slice(-1));




// Retorne o total de taxas
const transacoes01 = [
  'Taxa do Banco',
  '   TAXA DO PÃO',
  '  taxa do mercado',
  'depósito Bancário',
  'TARIFA especial',
];

let totalTaxa2 = 0;

transacoes01.forEach((item) => {
  item = item.toLowerCase();
  item = item.trim();
  item = item.slice(0, 4);

  if (item == "taxa") {
    totalTaxa2++;
  }
});

console.log(totalTaxa2);




