/* const promessa = new Promise((resolve, reject) => {
  let condicao = false;
  if(condicao){
    setTimeout(() => {
        resolve({nome: "Bruno", idade: 31})
    }, 1000)
  }else{
    reject(Error('Ocorreu um erro na promise'))
  }
});

const retorno = promessa.then(resolucao => {
  resolucao.profissao = "Programador"
  return resolucao
})
.then(resolucao => {
  console.log(resolucao)
}, rejeitada => {
   console.log(rejeitada)
}).finally(() => {
    console.log("Acabou")
}) */

// .catch(rejeitada => {
//   console.log(rejeitada)
// })

//console.log(retorno)



const login = new Promise(resolve => {
  setTimeout(() => {
    resolve("Usuario Logado")
  }, 1000)
});

const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve("Dados Carregados")
  }, 1500)
});

const carregouTudo = Promise.all([login, dados])

carregouTudo.then(resolucao => {
  console.log(resolucao)
})


const carregouTudo2 = Promise.race([login, dados])

carregouTudo2.then(resolucao => {
  console.log(resolucao)
})