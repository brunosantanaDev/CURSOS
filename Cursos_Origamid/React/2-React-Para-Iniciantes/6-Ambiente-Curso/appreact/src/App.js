import React from "react";

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;

  const total = dados.compras
  .map((item) => +item.preco.replace("R$ ",""))
  .reduce((a,b) => a + b);

  const cor = {color: dados.ativa ? "green" : "red", fontSize:"20px",}

  return(
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação: 
        <span style={cor}>
          {dados.ativa ? " ativa" : " inativa"} 
        </span></p>
        <p>Total de Gastos:    
          <span style={{color:"green"}}>
            {total > 10000 && " Você esta gastando muito"} </span>
          <span style={{color:"green"}}>
            {total < 10000 && " Seus gastos estão dentro do limite, tudo ok"} 
          </span>
      </p> 
    </>
  );
};

export default App;
