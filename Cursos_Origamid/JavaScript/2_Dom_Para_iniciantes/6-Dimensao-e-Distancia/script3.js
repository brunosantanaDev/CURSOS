
const animaisLista = document.querySelector(".animais-lista");
//console.log(animaisLista.scrollHeight);


const primeiroH2 = document.querySelector("h2");
//console.log(primeiroH2.offsetHeight, primeiroH2.offsetLeft)

const h2Rect = primeiroH2.getBoundingClientRect().top;
//console.log(h2Rect)









// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector(".imagem1[src^='img/imagem1']");
console.log(primeiraImg.getBoundingClientRect().top);



// Retorne a soma da largura de todas as imagens
window.onload = function () {
  const imgs = document.querySelectorAll("img");
  let soma = 0;

  imgs.forEach((img) => {
    soma += img.offsetWidth;
  });

  console.log(soma);
}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a");

links.forEach((link) => {
  if (link.offsetWidth >= 48 && link.offsetHeight >= 48) {
    console.log(link, "Possui acessibilidade", link.offsetWidth, link.offsetHeight);
  } else {
    console.log(link, "Não possui acessibilidade");
  }
});



// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menuMobile = document.querySelector(".menu");
const larguraTela = window.matchMedia("(max-width: 720px)").matches;

if (larguraTela) {
  menuMobile.classList.add("menu-mobile");
} else {
  console.log("Desculpe, a largura esta acima de 720px")
}
console.log(menuMobile);



