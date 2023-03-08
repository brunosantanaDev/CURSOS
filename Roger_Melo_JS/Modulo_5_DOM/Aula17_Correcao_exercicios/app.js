/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/

const ul = document.querySelector(".videos")
const childsUl = Array.from(ul.children)

childsUl.forEach(li => {
  li.classList.add("video")  
  console.log(li)
})



/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/

const h2 = document.querySelector("h2")
const body = h2.parentElement
console.log(body)




/*
  03

  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/

const h1 = document.querySelector("h1")
console.log(h1.nextElementSibling)




/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/

const siblingUl = document.querySelector("ul")
console.log(siblingUl.previousElementSibling)



/*
  05

  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/

childsUl.forEach(li => {
  li.addEventListener("click",(event) => {
    console.log(event.target)
  })
})



/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [
  {
    name: 'Como o promise all funciona | JavaScript',
    length: '00:01:52'
  }, 
  {
    name: 'Como refatorar um for loop | JavaScript',
    length: '00:04:18'
  }, 
  {
    name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
    length: '00:02:55'
  }
]

let ulVideos = document.querySelector("ul")
const button = document.querySelector('button')

button.addEventListener("click", () => {
   videos.forEach(video => {
    const title = video.name
    const li = document.createElement('li')
    li.textContent = title
    ulVideos.append(li)
  })
})




/*
  07

  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/

const clickBody = document.querySelector('body')
console.log(clickBody)

clickBody.addEventListener("click", () => {
  const elements = clickBody.querySelectorAll('*')
  elements.forEach(element => {
    element.remove()   
  })
}) 