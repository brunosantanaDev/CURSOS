
/*
function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro("Honda", 2000);
const fiat = new Carro("Fiat", 4000);


function Carro2(marca, precoInicial) {
  this.taxa = 1.2;
  const precoFinal = precoInicial * this.taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const mazda = new Carro2("Mazda", 5000);
const polo = new Carro2("Polo", 1000);
*/



// const Dom = {
//   seletor: "li",
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativa() {
//     this.element().classList.add("ativar");
//   }
// }



function Dom(seletor) {
  this.element = function () {
    return document.querySelector(seletor);
  }

  this.ativa = function () {
    this.element().classList.add("ativar");
  }
}

//const li = new Dom("li");




// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + ' andou');
  }
}


// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const Maria = new Pessoa("Maria", 25);
const Joao = new Pessoa("João", 20);
const Bruno = new Pessoa("Bruno", 15);


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom2(element) {
  this.elements = document.querySelectorAll(element);

  this.addClass = function () {
    this.elements.forEach((el) => {
      el.classList.add("ativo");
    });
  }

  this.removeClass = function () {
    this.elements.forEach((el) => {
      el.classList.remove("ativo");
    });
  }

}
const li = new Dom2("li");