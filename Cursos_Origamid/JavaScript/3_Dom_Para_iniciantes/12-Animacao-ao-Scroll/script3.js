

// Site Mozila Develop = Element Propriety
document.documentElement.className += " js";

function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  const ativoClass = "ativo";


  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(ativoClass);

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(ativoClass);
      });
      tabContent[index].classList.add(ativoClass);
    }

    tabMenu.forEach((img, index) => {
      img.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();


function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const classActive = "ativo";

  if (accordionList.length) {
    accordionList[0].nextElementSibling.classList.add(classActive);
    accordionList[0].classList.add(classActive);

    function activeAccordion(event) {
      this.classList.toggle(classActive);
      event.currentTarget.nextElementSibling.classList.toggle(classActive);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();


function initScrollSuave() {
  const links = document.querySelectorAll("a[href^='#']");

  if (links.length) {
    function activeScrollSuave(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      setTimeout(function () {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }

    links.forEach((link) => {
      link.addEventListener("click", activeScrollSuave);
    });
  }
}
initScrollSuave();


function initAnimaScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const metadeTela = (sectionTop - windowMetade) < 0;

        if (metadeTela)
          section.classList.add("ativo");
        else
          section.classList.remove("ativo");
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimaScroll();








