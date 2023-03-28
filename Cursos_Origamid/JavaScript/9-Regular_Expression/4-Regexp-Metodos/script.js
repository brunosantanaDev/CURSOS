

const nome = "Bruno 20/02/1991"

const regexp = new RegExp('\\w+\s','gi')
const regex = /\w+\s/gi;


const frase = nome.replace(regexp, 'Bruno Henrique ')
console.log(frase)
