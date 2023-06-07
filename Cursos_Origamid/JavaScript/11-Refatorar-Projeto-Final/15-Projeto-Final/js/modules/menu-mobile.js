import outSideClick from "./outsideclick.js";

export default class MenuMobile{
  constructor(menuButton, menuList, events){
    this.menuButtom = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.openMenu = this.openMenu.bind(this);
    this.activeClass = 'ativo';
    if(events === undefined) this.eventos = ["click"];
    else this.eventos = events;
  }

  openMenu(){
    this.menuList.classList.add(this.activeClass);
    this.menuButtom.classList.add(this.activeClass);
    outSideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButtom.classList.remove(this.activeClass);
    })
  }

  addEventMenu(){
    this.eventos.forEach((evento) => this.menuButtom.addEventListener(evento, this.openMenu));
  }

  init(){
    if(this.menuButtom){
      this.addEventMenu();
    }
    return this;
  }
}
