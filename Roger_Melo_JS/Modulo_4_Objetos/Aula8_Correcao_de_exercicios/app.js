/*
  01

  - Declare uma constante que recebe o seu nome;
  - Ela deve ter um escopo global.
*/

const myName = "Bruno"


/*
  02

  - Funções também são blocos de código;
  - Crie uma função que ao ser invocada, exibe sua idade no console;
  - Dentro da função, declare uma let que armazena a sua idade;
  - Exiba sua idade no console, através da invocação da função;
  - Do lado de fora da função exiba no console o valor da let que foi declarada  
    dentro da função;
  - Um erro com a mensagem "Uncaught ReferenceError: SUA_VARIÁVEL is not  
    defined" será exibido no console;
  - Você sabe por que isso aconteceu?
*/

const myNameIs = () => {
  let age = 31
  return age
}

//console.log(myNameIs())
//console.log(age)





/*
  03

  - Crie um objeto "car" com as seguintes propriedades e métodos:
    - name, que recebe o nome do carro;
    - brand, que recebe a marca do carro;
    - colors, que recebe 3 cores para o carro;
    - isRunning, que recebe um boolean indicando se o carro está em movimento.  
      Inicialmente, deve receber um boolean indicando que o carro não está em  
      movimento;
    - run, que é um método que faz o carro andar e retorna a mensagem  
      "O NOME_DO_CARRO está em movimento";
    - stop, que é um método que faz o carro parar e retorna a mensagem  
      "O NOME_DO_CARRO está parado";
    - getColorsMessage, que é um método que retorna a mensagem  
      "O NOME_DO_CARRO está disponível nas cores COR_01, COR_02 e COR_03".
*/

const car = {
  nome:"Uno",
  brand: "Fiat",
  colors: ['Preto','Vermelho','Cinza'],
  isRunning: false,
  run(){
    this.isRunning = true
    return `O ${this.nome} está em movimento`
  },
  stop(){
    this.isRunning = false
    return `O ${this.nome} está parado`
  },
  getColorsMessage(){
    const colorsCar = this.colors
    const colorsCarJoin = colorsCar.join(",").replace(`,${colorsCar[1]},`,`, ${colorsCar[1]} e `)
    return `O ${this.nome} está disponível nas cores ${colorsCarJoin}`
  }
}

//console.log(car.getColorsMessage())


/*
  04

  - Faça o carro andar e exiba no console se ele realmente está em movimento.
*/

//console.log(car.run())
//console.log(car.isRunning === true)


/*
  05

  - Faça o carro parar e exiba no console se ele realmente está parado.
*/

//console.log(car.stop())
//console.log(car.isRunning === false)


/*
  06

  - Exiba, no console, a mensagem com as cores do carro.
*/

//console.log(car.getColorsMessage())




/*
  07

  - Exiba, no console, a mensagem "";
  - Utilize a notação de colchetes para acessar as propriedades do carro.
*/

console.log(`O carro é um ${car['brand']} ${car['nome']}`)
