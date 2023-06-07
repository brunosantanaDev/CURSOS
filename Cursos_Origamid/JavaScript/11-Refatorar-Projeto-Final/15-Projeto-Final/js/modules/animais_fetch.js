import AnimaNumeros from "./anima-numeros.js";

function fetchAnimais(url, target) {
  function createHtmlAnimal({ especie, total }) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${especie}</h3><span data-numero>${total}</span>`;
    return div;
  }
  
  const numerosGrid = document.querySelector(target);
  
  function fillDisplayAnimals(animal){
    const divAnimal = createHtmlAnimal(animal);
    numerosGrid.append(divAnimal);
  }

  function animaAnimaisNumeros(){
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  async function criarAnimais() {
    try{
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      animaisJson.forEach(animal => fillDisplayAnimals(animal));
      animaAnimaisNumeros();
    }catch(erro){
      console.log(erro, "Erro na requisição");
    }
  }
  
  return criarAnimais();
}

export default fetchAnimais;
