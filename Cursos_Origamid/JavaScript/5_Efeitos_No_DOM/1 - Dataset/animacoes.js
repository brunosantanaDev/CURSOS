

// Site Mozila Develop = Element Propriety
document.documentElement.className += " js";

function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  const ativoClass = "ativo";

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(ativoClass);

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(ativoClass);
        // tabContent[index]classList.dataset.anime;
      });

      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add(ativoClass, direcao);
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
  const accordionList = document.querySelectorAll("[data-anime='accordion'] dt");
  const classActive = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(classActive);
    accordionList[0].nextElementSibling.classList.add(classActive);

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
  const links = document.querySelectorAll("[data-srcoll='suave'] a[href^='#']");

  if (links.length) {
    function activeScrollSuave(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    links.forEach((link) => {
      link.addEventListener("click", activeScrollSuave);
    });
  }
}
initScrollSuave();


function initAnimaScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

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



/*
const div = document.querySelector('[data-cor]')
console.log(div.dataset.animaScroll); */


// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.


// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)


// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita


// Substitua todas as classes js- por data atributes.




