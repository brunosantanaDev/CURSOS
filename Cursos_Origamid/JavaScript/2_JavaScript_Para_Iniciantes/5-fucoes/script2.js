
function terceiraIdade(idade) {

  console.log(typeof idade);

  if (typeof idade != "number") {
    return "Por favor digite a sua idade apenas número, por ex: 60";
  } else if (idade >= 60) {
    return `Sim vc é da terceira idade: ${idade} anos`;
  } else {
    return false;
  }
}
console.log(terceiraIdade('oi'));



function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}
console.log(faltaVisitar(20));






// Crie uma função para verificar se um valor é Truthy
function verificarTrue(valor) {
  return !!valor;
}
var valorVerificado = verificarTrue(0);
console.log(valorVerificado);


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return `O perimetro é ${lado * 4}`;
}
console.log(perimetroQuadrado(10));


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  let nomeCompleto = `${nome} ${sobrenome}`;
  return nomeCompleto;
}
console.log(nomeCompleto("Bruno", "Santana"));



// Crie uma função que verifica se um número é par
function numeroPar(numero) {
  if (typeof numero != "number") {
    return "Por favor digite um número";
  } else if (numero % 2 == 0) {
    return `O número ${numero} é par`;
  } else {
    return `O número ${numero} não é par, é um número impar`;
  }
}
console.log(numeroPar(5));



// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDados(valor) {
  return typeof valor;
}
console.log(tipoDados(function () { }));


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", function () {
  console.log("Bruno Santana")
});



// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
