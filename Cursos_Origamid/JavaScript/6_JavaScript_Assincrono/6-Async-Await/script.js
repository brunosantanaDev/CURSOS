async function dados(){
  const respostaDados = await fetch("./dados.json");
  const dadosCliente = await (await respostaDados).json()
  console.log(dadosCliente)
}

 dados()