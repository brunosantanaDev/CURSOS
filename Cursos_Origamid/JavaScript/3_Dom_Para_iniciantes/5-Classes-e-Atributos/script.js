
const menu1 = document.querySelector(".menu");
menu1.className += " vermelho";
console.log(menu1.className);


const animais = document.querySelector(".animais");
console.log(animais.attributes["data-teste"].value)






// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll(".menu a");

menu.forEach(item => {
  let a = item.classList.add("ativo");
  console.log(item);
});


// Remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro

menu.forEach(function (item) {
  item.classList.remove("ativo");
});
menu[0].classList.add("ativo");


// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");
imgs.forEach(img => {
  const veImg = img.hasAttribute("alt");
  console.log(img, veImg);
});


// Modifique o href do link externo no menu
menu[3].setAttribute("href", "http://google.com");

