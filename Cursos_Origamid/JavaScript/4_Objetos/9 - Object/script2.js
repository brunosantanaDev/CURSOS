

const pessoa = new Object({
  nome: "Bruno",
});


const carro = {
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return this
  },
  acelerar() {
    return this.marca + ' acelerou';
  },
  buzinar() {
    return this.marca + ' buzinou';
  }
}


const honda = Object.create(carro).init("Ferrari");


const carro2 = {
  marca: 'ford',
  ano: 2008,
}
carro2.porta = 4;



//Object.freeze(carro2)
//Object.seal(carro2)
//Object.preventExtensible()

carro2.marca = "Ferrari";
console.log(carro2);








// Crie uma função que verifique
// corretamente o tipo de dado
function tipoDados(valor) {
  const verificaDados = Object.prototype.toString.call(valor);
  return verificaDados;
}
console.log(tipoDados("Bruno"))


// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {}
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true,
  }
});

quadrado.lados = 20;
console.log(quadrado);



// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao);



// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(String.prototype));
















/* const h1 = document.querySelector('section h1');
const arrayH1 = h1.innerHTML.split("");
h1.innerHTML = "";

arrayH1.forEach((letra, index) => {
  setTimeout(function () {
    h1.innerHTML += letra;
  }, 80 * index);
});
 */








/* 
const cursos = [
  { curso: "Inglês", tempo: 90, aulas: 80, valor: "R$ 150,940", },
  { curso: "Matematica", tempo: 10, aulas: 30, valor: "R$ 300,8447", },
  { curso: "Photoshop", tempo: 50, aulas: 25, valor: "R$ 402,55", },
  { curso: "Design de Interface", tempo: 80, aulas: 41, valor: "R$ 240", },
  { curso: "Programação", tempo: 150, aulas: 72, valor: "R$ 788,01", },
  { curso: "Autocard 2022", tempo: 20, aulas: 16, valor: "R$ 100", },
];

function limparPreco(objeto) {
  obj = objeto.valor.replace("R$ ", "");
  obj = +obj.replace(",", ".");
  obj = +obj.toFixed(2);
  return obj;
}

let soma = 0;
cursos.map(function (objeto) {
  soma += limparPreco(objeto);
});

console.log(soma.toLocaleString("pt-br", { style: "currency", currency: "BRL" }));
 */








