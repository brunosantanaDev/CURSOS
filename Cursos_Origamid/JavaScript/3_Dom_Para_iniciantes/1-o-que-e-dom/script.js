

//const h1Selecionado = document.querySelector("h1");

//const lista = document.querySelectorAll("ul li");


















































function excluirDados() {
  if (confirm("Tem certeza que deseja excluir")) {
    window.location = "http://google.com";
  }
}

const botaoExcluir = document.querySelector(".btnExcluir");
botaoExcluir.addEventListener("click", excluirDados);