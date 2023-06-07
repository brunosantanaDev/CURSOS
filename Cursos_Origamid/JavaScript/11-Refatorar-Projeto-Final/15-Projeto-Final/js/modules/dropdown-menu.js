import outSideClick from "./outsideclick.js";

export default class initDropDownMenu{
  constructor(dropmenus,events){
    this.dropDownMenus = document.querySelectorAll(dropmenus);
    this.activeClass = 'ativo';
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this)

    if(events === undefined)
      this.events = ["click"];
    else
      this.events = events;
  }

  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outSideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropDownMenuEvents(){
    this.dropDownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init(){
    if(this.dropDownMenus){
     this.addDropDownMenuEvents();
    }
    return this;
  }
}
