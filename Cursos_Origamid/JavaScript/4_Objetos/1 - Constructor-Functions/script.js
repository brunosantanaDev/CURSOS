
function Dom(seletor) {

  this.element = function () {
    return document.querySelector(seletor);
  }

  this.ativo = () => {
    this.element().classList.add('ativo');
  }
}

const li = new Dom("li");



// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + ' andou');
  }
}
const pessoa = new Pessoa();
pessoa.nome = "bruno";

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa("Joao", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 30);


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const classe = "ativo";
  this.elements = document.querySelectorAll(seletor);

  this.addClass = function () {
    this.elements.forEach((el) => {
      el.classList.add(classe);
    });
  }

  this.removeClass = function () {
    this.elements.forEach((el) => {
      el.classList.remove(classe);
    });
  }
}

const elemento = new Dom("li");







/* function Dom(seletor) {

  this.element = function () {
    return document.querySelectorAll(seletor);
  }

  this.ativo = () => {
    li.element().forEach(function (item) {
      item.addEventListener("click", function (event) {
        event.currentTarget.classList.add('ativo');
      });
    });

    // this.element().classList.add('ativo');
  }
}

const li = new Dom("li"); */









