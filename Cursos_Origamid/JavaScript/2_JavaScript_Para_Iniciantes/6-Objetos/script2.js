var pessoa = {
  nome: "Bruno",
  idade: 29,
} 

var quadrado = {
  lados:4,
  area: function(lado){
    return lado * lado;
  },

  perimetro(lado){
      return  this.lados * lado;
  },

}


console.log(quadrado.perimetro(10));




// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
let aluno = {
  nome: "Bruno",
  sobrenome: "Santana",
  Idade: 29,
  filhos: true,
}


// Crie um método no objeto anterior, que mostre o seu nome completo
aluno.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}`;
}
console.log(aluno.nomeCompleto());


// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa){
    if(pessoa === "homem"){
      return "Latir";
    }else{
      return false; 
    }
  }
}

console.log(cachorro.latir('homem'));























































