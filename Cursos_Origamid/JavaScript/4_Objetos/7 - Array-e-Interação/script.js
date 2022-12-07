


// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) => {
//   array[index] = 'teste';
//   //console.log(item, index, array)
// })



// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]

// const tempoAulas = aulas.map(aula => aula.min);
// [15, 10, 20, 25];

// const puxarNomes = aula => aula.nome;
// const nomesAulas = aulas.map(puxarNomes);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']



// function nomeAulas(aula) {
//   return aula.nome;
// }

// const arrayNomeAulas = aulas.map(nomeAulas);




// const novoArrayAulas = aulas.reduce((ac, item, index) => {
//   ac[index] = item.nome;
//   return ac;
// }, []);

//console.log(novoArrayAulas)












// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

function cadaCurso() {
  const cursos = Array.from(document.querySelectorAll(".curso"));

  function handleCurso(item) {
    const titulo = item.querySelector("h1").innerText;
    const descricao = item.querySelector("p").innerText;
    const aulas = +item.querySelector(".aulas").innerText;
    const horas = +item.querySelector(".horas").innerText;

    return {
      titulo,
      descricao,
      aulas,
      horas,
    }
  }

  const novoCurso = cursos.map(handleCurso);
  console.log(novoCurso)
}
cadaCurso();





// Retorne uma lista com os
// números maiores que 100

function maioreQueSem() {
  const numeros = [3, 44, 333, 23, 122, 322, 33];

  function handlerMaiorQueSem(numero) {
    return numero > 100;
  }

  const maiorQue100 = numeros.filter(handlerMaiorQueSem);
  console.log(maiorQue100)
}
maioreQueSem();





// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true

function temBaixoList() {
  const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

  function handleTemBaixo(item) {
    return item === "Teclado";
  }

  const temBaixo = instrumentos.some(handleTemBaixo);
  console.log(temBaixo);
}
temBaixoList();




// Retorne o valor total das compras

function valorTotalCompras() {
  const compras = [
    {
      item: 'Banana',
      preco: 'R$ 4,99'
    },
    {
      item: 'Ovo',
      preco: 'R$ 2,99'
    },
    {
      item: 'Carne',
      preco: 'R$ 25,49'
    },
    {
      item: 'Refrigerante',
      preco: 'R$ 5,35'
    },
    {
      item: 'Quejo',
      preco: 'R$ 10,60'
    }
  ]

  function handleValorTotal(acc, item) {
    let preco = item.preco.replace("R$ ", "");
    preco = +preco.replace(",", ".");

    return acc + preco;
  }

  const valorTotal = compras.reduce(handleValorTotal, 0);
  console.log(valorTotal);
}
valorTotalCompras();







