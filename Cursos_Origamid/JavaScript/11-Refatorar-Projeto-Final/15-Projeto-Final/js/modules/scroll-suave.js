export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }

    this.activeScrollSuave = this.activeScrollSuave.bind(this);
  }

  activeScrollSuave(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.activeScrollSuave);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addEvent();
    }
    return this;
  }
}





