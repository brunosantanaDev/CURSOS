async function puxarDados(){
    const responseDados = await fetch("./dados.json")
    const dadosJson = await responseDados.json()
    console.log(dadosJson)
}

puxarDados()


