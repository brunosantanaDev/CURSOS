



// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
// }

// Pessoa.prototype.andar = function () {
//   return this.nome + " Andou";
// }

// Pessoa.prototype.nadar = function () {
//   return this.nome + " nadou";
// }

// const andre = new Pessoa("Andre", 31);


//console.log(Pessoa.prototype.andar());
//console.log(andre.andar());


// andre = new Pessoa("Andre", 31).prototype.andar();
// Pessoa.prototype.andar() { this.nome };






// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa


function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
}

const bruno = new Pessoa("Bruno", "Santana", 31)

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

document.innerText
Array.prototype.filter

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li.constructor.name;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
















































