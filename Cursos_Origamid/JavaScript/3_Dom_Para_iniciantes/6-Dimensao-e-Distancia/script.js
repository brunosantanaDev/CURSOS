// Site Mozila Develop = Element Propriety

const listaAnimais = document.querySelector(".animais-lista");
const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;




//getBoundingClientRect()
listaAnimais.getBoundingClientRect();
listaAnimais.width;
listaAnimais.top;
listaAnimais.x;
listaAnimais.left;


const small = window.matchMedia("(max-width: 600px)").matches;
if (small) {
  console.log(small, "Usuario Mobile");
} else {
  console.log(small, "Não mobile");
}
console.log("----------------------------------------------------------");




// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelectorAll(".animais-lista img")[0];
console.log(primeiraImagem.offsetTop);



// Retorne a soma da largura de todas as imagens
function somarImagem() {
  const todasImagem = document.querySelectorAll("img");
  let soma = null;
  todasImagem.forEach(function (imgs) {
    soma += imgs.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somarImagem();
}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a");
links.forEach((link) => {

  if (link.offsetHeight >= 48 && link.offsetWidth >= 48) {
    console.log(link, "Possui Boa Acessebilidade");
  } else {
    console.log(link, "Não Possui Boa Acessebilidade");
  }
});



// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector(".menu");
const tela = window.matchMedia("(max-width: 720px)").matches;
if (tela) {
  menu.classList.add(".menu-mobile");
} else {
  menu.classList.remove(".menu-mobile");
}