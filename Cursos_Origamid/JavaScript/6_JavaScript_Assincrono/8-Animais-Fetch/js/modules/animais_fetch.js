export default function animaisFetch(){

}

async function fetchAnimais(url){
  const animaisResponse = await fetch(url)
  const animaisJson = await animaisResponse.json()
  const sectionNumbers = document.querySelector(".numeros-grid")

  animaisJson.forEach(obj => {
    const div = document.createElement("div")
    div.classList.add("numero-animal")
    div.innerHTML = `<h3>${obj.especie}</h3><span>${obj.total}</span>`
    sectionNumbers.append(div)
  });

}

fetchAnimais("./animaisapi.json")