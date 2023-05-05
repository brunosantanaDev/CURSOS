export default class Accordion {
  constructor(list) {
    this.accordionList = Array.from(document.querySelectorAll(list));
    this.classActive = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.classActive);
    item.nextElementSibling.classList.toggle(this.classActive);
  }

  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  init() {
    const item = this.accordionList[0];
    const existAcoordion = this.accordionList.length;
    
    if (existAcoordion) {
      this.toggleAccordion(item)
      this.addAccordionEvent();
    }
    return this;
  }
}
