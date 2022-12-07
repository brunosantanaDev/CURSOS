

/* function Dom(seletor) {
  //this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
  console.log(this)
  this.element.classList.add(classe);
}

const li = {
  element: document.querySelector('li'),
}

Dom.prototype.ativo.call(li, "ativo"); */

//const ul = new Dom("ul");
//ul.ativo.call(li, "ativo");




//const frutas = [null, 'Pera', 'Maça', 'Uva', 0];

/* const li2 = document.querySelectorAll("li"); // 4 li

const arrayFrutas = Array.prototype.filter.call(li2, (item) => {
  //console.log(this)
  return item.classList.contains("ativo");
}); */




// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll("p");

function hasTotal(acc, p) {
  return acc + p.innerText.length;
}

const totalcaracter = Array.prototype.reduce.call(paragrafos, hasTotal, 0);
console.log(totalcaracter);



// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function handleElementos(tag, classe, conteudo) {
  if (tag && classe && conteudo) {
    const element = document.createElement(tag);
    element.classList.add(classe);
    element.innerHTML = conteudo;
    return element;

  } else {
    console.log("Algum dado não foi informado...")
  }
}

const novoElemento = handleElementos("section", "ativo", "Essa é minha Sessao");
console.log(novoElemento)


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const novoH1 = handleElementos.bind(null, "h1", "titulo");
const cursoJs = novoH1("Curso de JavaScript");
const cursoHTML = novoH1("Curso de HTML");
console.log(cursoJs, cursoHTML);

