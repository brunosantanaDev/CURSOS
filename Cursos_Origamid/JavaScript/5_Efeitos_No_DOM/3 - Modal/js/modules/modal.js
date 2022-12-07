export default function initModal() {

  const botaoAbrir = document.querySelector("[data-modal='abrir']");
  const botaoFechar = document.querySelector("[data-modal='fechar']");
  const containerModal = document.querySelector("[data-modal='container']");
  const activeClass = "ativo";

  if (botaoAbrir && botaoFechar && containerModal) {
    function taggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle(activeClass);
    }

    function cliqueForaModal(event) {
      if (event.target === this)
        taggleModal(event);
    }

    botaoAbrir.addEventListener("click", taggleModal);
    botaoFechar.addEventListener("click", taggleModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}


