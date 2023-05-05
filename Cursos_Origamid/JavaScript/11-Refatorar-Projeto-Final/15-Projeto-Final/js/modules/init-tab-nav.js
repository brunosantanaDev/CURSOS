export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.ativoClass = "ativo";
  }

  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.ativoClass);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.ativoClass, direcao);
  }

  addTabNavEvent(){
    this.tabMenu.forEach((img, index) => {
      img.addEventListener("click", () => this.activeTab(index));
    });
  }

  init(){
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}