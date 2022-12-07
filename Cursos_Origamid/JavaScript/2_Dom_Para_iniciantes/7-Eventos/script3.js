

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links = document.querySelectorAll(".menu a[href^='#']");

function ativaLink(event) {
  event.preventDefault();

  links.forEach((link) => {
    link.classList.remove("ativo");
    link.removeAttribute("class");
  });

  event.target.classList.add("ativo");
}

links.forEach((link) => {
  link.addEventListener("click", ativaLink);
});



// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosEl = document.querySelectorAll("body *");

function mostraEl(event) {
  const elClicado = event.currentTarget;
  //console.log(elClicado);
  //elClicado.remove();
}

todosEl.forEach((elemento) => {
  elemento.addEventListener("click", mostraEl);
});
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento




// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function aumentaTexto(event) {
  if (event.key == "t") {
    document.documentElement.classList.toggle("ativo");
  }
}

window.addEventListener("keypress", aumentaTexto);
