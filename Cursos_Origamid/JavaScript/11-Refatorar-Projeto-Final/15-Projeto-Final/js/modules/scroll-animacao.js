export default class AnimaScroll{
  constructor(target){
    this.sections = document.querySelectorAll(target);
    this.windowMetade = window.innerHeight * 0.6;
    this.animaScroll = this.animaScroll.bind(this);
  }

  verifyDisplay(section, metadeTela){
    if (metadeTela) {
      section.classList.add("ativo");
    } else if (section.classList.contains("ativo")) {
      section.classList.remove("ativo");
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
    const data = new Date('2023-12-17T03:24:00');;
    return this;
  }
}
