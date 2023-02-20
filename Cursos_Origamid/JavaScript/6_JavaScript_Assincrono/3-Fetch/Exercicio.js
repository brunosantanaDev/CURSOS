
// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const inputCep = document.querySelector("#cep")
const btnCep = document.querySelector(".btnCep")
const resultado = document.querySelector(".resultadoCep")
btnCep.addEventListener("click", handleClick)

function handleClick(event){
  event.preventDefault()
  const cep = inputCep.value
  buscaCep(cep)
}

function buscaCep(cep){
  fetch(`https://viacep.com.br/ws/${cep}/json`)
  .then(response => response.text())
  .then(dados => {
    resultado.innerText = dados
  })
  inputCep.value = "";
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const resultadoBitcoin = document.querySelector(".resultadoBitcoin")

function fecthBTC(){
  fetch("https://blockchain.info/ticker")
    .then(response => response.json())
    .then(dados => {
        resultadoBitcoin.innerText = ("R$ " + dados.BRL.buy).replace(".",","); 
    })
}
fecthBTC()
setInterval(fecthBTC, 1000 * 60)




// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const displayPiada = document.querySelector(".piada")
const btnProxima = document.querySelector(".btnProxima")
btnProxima.addEventListener("click", puxarPiada)

function puxarPiada(){
  fetch("https://api.chucknorris.io/jokes/random")
  .then(response => response.json())
  .then(piada => {
      displayPiada.innerText = piada.value
  })

}
puxarPiada()
