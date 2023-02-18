

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
