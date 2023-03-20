// const buttons = document.querySelectorAll('button');

// for(const btn of buttons) {
//   btn.style.background = 'purple';
//   btn.style.color = '#fff';

// }

// console.log(...buttons);





// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const listaLi = document.querySelectorAll('li')
//console.log(listaLi)

for(li of listaLi){
    li.classList.add('a')
}

console.log(...listaLi)

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

const winProperts = window
//console.log(winProperts)
let i = 0
const section = document.querySelector("section")
for(win in winProperts){
    const div = document.createElement('div')
    const text = `<div>${win}</div>`
    div.innerHTML = text
    setTimeout(() => {
        section.append(div)
    }, 1000 * i++)
    
}