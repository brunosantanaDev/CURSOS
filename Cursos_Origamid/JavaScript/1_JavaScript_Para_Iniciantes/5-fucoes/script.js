function areaQuadrado(){

}


function imc(peso, altura){
  var imc2 = peso / (altura * altura);
  return imc2;
}

console.log(imc(80,1.8));
console.log(imc());


function corFavoritas(cor){
  if(cor === "azul"){
    return "Eu gosto e Azul";
  }
  else if(cor === "verde"){ 
    return "Eu gosto de Verde";
  }else{
    return "Eu não gosto de cores";
  }
}

//document.querySelector(".botao").addEventListener("click", function(){
  
//});


function terceiraIdade(idade){
  console.log(typeof idade);
  if(idade >= 60){
    console.log(`Idade é a: ${idade}`);
  }else{
    return false;
  }

}
console.log(terceiraIdade(60));
console.log(terceiraIdade(50));



function faltaVisitar(paisesVisitados){
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados}`;
}























// ############### EXERCICIO ##################


// Crie uma função para verificar se um valor é Truthy
function isTruthy(dado){
  return !!dado;
}


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado){
  return lado * 4;
}


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome,sobrenome){
  return `${nome} ${sobrenome}`;
}


// Crie uma função que verifica se um número é par
function isEven(numero){
  var modulo = numero % 2;
  if(modulo === 0){
    return true;
  }else{
    return false;
  }

}


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado){
  return typeof dado;
}


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", function(){
  console.log("Bruno Santana");
});


//Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(30));
console.log(jaVisitei(100));










