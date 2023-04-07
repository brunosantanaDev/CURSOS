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


function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].nextElementSibling.classList.add(activeClass);
    accordionList[0].classList.add(activeClass);

    function activeAccordion(event) {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((dt) => {
      dt.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();







// const accordionList = document.querySelectorAll(".js-accordion dt");
// const classActive = "ativo";

// function activeAccordion(event) {

//   accordionList.forEach((item) => {
//     item.classList.remove(classActive);
//     item.nextElementSibling.classList.remove(classActive);
//   });

//   this.classList.add(classActive);
//   event.currentTarget.nextElementSibling.classList.add(classActive);
// }

// accordionList.forEach((item) => {
//   item.addEventListener("click", activeAccordion);
// });






