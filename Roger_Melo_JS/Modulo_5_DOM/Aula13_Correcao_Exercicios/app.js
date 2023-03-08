/*
  01

  - Faça com que o texto do h1 do index.html seja exibido com todas as letras  
    maiúsculas.
*/

const h1 = document.querySelector("h1")
h1.innerText = h1.innerText.toUpperCase()



/*
  02

  - Adicione, na ul vazia do index.html, os números do array "numbers" abaixo;
  - Cada número deve estar dentro de uma <li> com a classe "number".
*/

const numbers = [53, 24, 3, 8, 1, 6, 57, 80, 77, 98, 55]
const ulNumbers = document.querySelector(".numbers")

numbers.forEach(number => {
  ulNumbers.innerHTML += `<li class="number">${number}</li>`
})
 



/*
  03

  - Modifique as cores dos números dentro da ul da seguinte forma:
    - Se o número é par, ele deve ser exibido na cor "lightblue";
    - Se o número é ímpar, exiba-o na cor "pink".
*/


const liNumbers = ulNumbers.querySelectorAll(".number")

liNumbers.forEach(itemLi => {
  const number = +itemLi.innerText
  const restDivision = number % 2 === 0
  
  if(restDivision){
    itemLi.style.color = 'blue'
  }else{
    itemLi.style.color = 'red'
  }
})




/*
  04
  - Adicione a classe "body-background" no corpo do index.html;
  P.s: a classe "body-background" já está declarada no style.css.
*/

document.body.classList.add("body-background")





/*
  05

  - Adicione o link 
    https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo no href  
    do link do index.html.
*/
const link = document.querySelector('.link')
link.attributes['href'].value = 'https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo'



/*
  06

  - Exiba o novo valor do atributo href do link no console.
*/

console.log(link.attributes['href'].value)




/*
  07

  - Exiba, no console, um objeto com todas as propriedades CSS que podem ser  
    manipuladas via JS no h1.
*/



/*
  08

  - Remova a classe "body-background", do elemento body.
*/



/*
  09

  - Se o link da página possuir uma classe "link", remova-a;
  - Não utilize o método remove() para fazer isso.
*/
