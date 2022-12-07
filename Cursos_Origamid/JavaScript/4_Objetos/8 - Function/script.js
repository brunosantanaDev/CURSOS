
// const perimetro = new Function("lado", "return lado * 4");





// function somar(n1, n2) {
//   return n1 + n2;
// }

// console.log(somar(3, 3));


// function darOi(nome) {
//   console.log("Oi pra você " + nome);
// }

// darOi.call({}, "Bruno");



// const carro = {
//   marca: "Ford",
//   ano: 2008,
// }

// function descricaoCarro() {
//   console.log(this.marca + ' ' + this.ano);
// }

// descricaoCarro() // undefined undefined
// descricaoCarro.call() // undefined undefined
// descricaoCarro.call(carro); // Ford 2008





// function Dom(seletor) {
//   console.log(this)
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function (classe) {
//   console.log(this);
//   this.element.classList.add(classe);
// }

// const li = {
//   element: document.querySelector('li')
// }

// Dom.prototype.ativo.call(li, 'ativar');


//const ul = new Dom('ul');


//ul.ativo.call(li, 'ativar');
//ul.ativo("ativar");




































