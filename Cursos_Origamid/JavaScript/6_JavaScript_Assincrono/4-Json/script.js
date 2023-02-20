
fetch("./dados.json")
  .then(response => response.text())
  .then(jsonText => {
    const jsonFinal = JSON.parse(jsonText)
    console.log(jsonFinal)

  })



