

const img = document.querySelector("img");

function callback(event) {
  console.log(event);
}
img.addEventListener("click", callback);



// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linkInt = document.querySelectorAll("a[href^='#']");

function linkAtivo(event) {
  event.preventDefault();
  linkInt.forEach((link) => {
    link.classList.remove(".ativo");
  });
  this.classList.add(".ativo");
  //ou event.currentTarget.classList.add(".ativo");
}

linkInt.forEach((link) => {
  link.addEventListener("click", linkAtivo);
});




// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll("body *");

todosElementos.forEach(function (elemento) {
  elemento.addEventListener("click", function (event) {
    //console.log(event.currentTarget);
  });
});



// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
todosElementos.forEach(function (elemento) {
  elemento.addEventListener("click", function (event) {
    // event.target.remove();
  });
});



// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
window.addEventListener("keyup", function (event) {
  console.log(event);
  if (event.key == "t") {
    document.documentElement.classList.toggle(".textomaior");
  }
});














