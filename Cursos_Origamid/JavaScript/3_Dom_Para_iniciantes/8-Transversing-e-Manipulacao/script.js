// const h1 = document.querySelector("h1");
// const animaisLista = document.querySelector(".animais-lista");

// h1.innerHTML;

// //console.log(animaisLista.innerHTML);

// const lista = document.querySelector(".animais-lista");
// //console.log(lista.parentElement);
// //console.log(lista.nextElementSibling);

// const mapa = document.querySelector(".mapa");
// const animais = document.querySelector(".animais");
// const contato = document.querySelector(".contato");
// const titulo = contato.querySelector(".titulo");

// //animais.append(titulo);
// //contato.insertBefore(animais, mapa);

// //contato.removeChild(titulo);

// contato.replaceChild(lista, titulo);

// const h1 = document.querySelector("h1");
// const faq = document.querySelector(".faq");
// const contato = document.querySelector(".contato");
// const menu = document.querySelector(".menu");

// const cloneH1 = h1.cloneNode(true);

// menu.prepend(cloneH1);



// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");
const paragrafo = document.querySelector(".copy p")

const copyMenu = menu.cloneNode(true);
copy.append(copyMenu);


// Selecione o primeiro DT da dl de Faq
const primeiroDt = document.querySelector(".faq-lista dt");
console.log(primeiroDt);


// Selecione o DD referente ao primeiro DT
const primeiroDD = primeiroDt.nextElementSibling;
console.log(primeiroDD);


// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector(".faq");
const animais2 = document.querySelector(".animais");
const body = document.body;

body.replaceChild(animais2, faq);

