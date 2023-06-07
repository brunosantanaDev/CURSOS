export default class AnimaScroll{
  constructor(secions){
    this.sections = Array.from(document.querySelectorAll(secions));
    this.windowMetade = window.innerHeight * 0.6;
    this.animaScroll = this.animaScroll.bind(this);
    this.active = "ativo";
  }

  verifyDisplay(section, metadeTela){
    if (metadeTela) {
      section.classList.add(this.active);
    } else if (section.classList.contains(this.active)) {
      section.classList.remove(this.active);
    }
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const metadeTela = sectionTop - this.windowMetade < 0;
      this.verifyDisplay(section, metadeTela);
    });
  }

  init(){
    if (this.sections) {
      this.animaScroll();
      window.addEventListener("scroll", this.animaScroll);
    }
    return this;
  }
}
