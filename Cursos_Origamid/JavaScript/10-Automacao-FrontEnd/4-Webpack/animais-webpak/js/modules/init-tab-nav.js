export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  const ativoClass = "ativo";

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove(ativoClass);
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add(ativoClass, direcao);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(ativoClass);
    tabMenu.forEach((img, index) => {
      img.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
