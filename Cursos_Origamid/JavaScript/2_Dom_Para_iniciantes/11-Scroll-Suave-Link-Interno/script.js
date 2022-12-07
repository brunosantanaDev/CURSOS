// Site Mozila Develop = Element Propriety
document.documentElement.className += " js";

function initTabNav() {
  const tabmenu = document.querySelectorAll(".js-tabmenu li");
  const tabcontent = document.querySelectorAll(".js-tabcontent section");
  const ativoClass = "ativo";

  if (tabmenu.length && tabcontent.length) {
    tabcontent[0].classList.add(ativoClass);

    function activeTab(index) {
      tabcontent.forEach((section) => {
        section.classList.remove(ativoClass);
      });
      tabcontent[index].classList.add(ativoClass);
    }

    tabmenu.forEach((img, index) => {
      img.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();


function initAcoordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const ativoClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(ativoClass);
    accordionList[0].nextElementSibling.classList.add(ativoClass);

    function activeAccordion(event) {
      this.classList.toggle(ativoClass);
      event.currentTarget.nextElementSibling.classList.toggle(ativoClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAcoordion();



function initScrollSuave() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

  function activeScroll(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({ behavior: "smooth", block: "start" });

    //forma alternativa
    // const topo = section.offsetTop;
    // //window.scrollTo(x, y) y distancia do elemento do top
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth'
    // });
  }

  linksInternos.forEach(function (link) {
    link.addEventListener("click", activeScroll);
  });
}
initScrollSuave();















