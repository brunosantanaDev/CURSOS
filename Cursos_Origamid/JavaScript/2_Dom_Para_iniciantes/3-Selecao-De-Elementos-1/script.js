
const animais = document.getElementById("animais");

const primeiraUl = document.querySelector("ul");

const linkInterno = document.querySelector("[href^='#']");

const primeiraImg = document.querySelector("[src='img']")

const animaisImg = document.querySelectorAll(".animais img")








const qsa = (el) => document.querySelectorAll(el);
const qs = (el) => document.querySelector(el);



// Retorne no console todas as imagens do site
const todasImagens = document.querySelectorAll("img");
console.log(todasImagens);


// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgComeca = document.querySelectorAll("img[src^='img/imagem']");
console.log(imgComeca);

// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll("[href^='#']");
console.log(linksInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = qs(".animais-descricao h2");
console.log(primeiroH2);


// Selecione o último p do site
const ultimoP = qsa("p")[qsa("p").length - 1];
console.log(ultimoP);





