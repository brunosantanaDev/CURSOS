


const animais = document.querySelector(".animais")
const lista = document.querySelector(".animais-lista");
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");

//animais.prepend(titulo);
//contato.insertBefore(lista, titulo)



// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);


// Selecione o primeiro DT da dl de Faq
const primeiroDt = document.querySelector(".faq dt");


// Selecione o DD referente ao primeiro DT
console.log(primeiroDt.nextElementSibling);


// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector(".faq");
const animais2 = document.querySelector(".animais")

faq.outerHTML = animais2.outerHTML;
