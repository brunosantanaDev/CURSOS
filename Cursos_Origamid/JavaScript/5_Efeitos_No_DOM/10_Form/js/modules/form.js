export default function initForm() {
  const contato = document.querySelector("#contato");
  //const display = document.querySelector(".display");
  //const erro = document.querySelector(".erro");

  function handleKeyup(event){
    const target = event.target;
    document.body.style.backgroundColor = event.target.value;

    contato.nome.setCustomValidity("O campo nome é importante.");
    contato.email.setCustomValidity("Este email não é valido, inclua um @.");
    contato.mensagem.setCustomValidity("O campo mensagem é importante");

    if(!target.checkValidity()){
      target.classList.add("ativo");
      target.nextElementSibling.classList.add("ativo");
      target.nextElementSibling.innerText = target.validationMessage;
    }else{
      console.log(target, target.nextElementSibling);
      target.classList.remove("ativo");
      target.nextElementSibling.classList.remove("ativo");
    }
    //display.innerText = event.target.value;
  }

  contato.addEventListener("change", handleKeyup);
}






