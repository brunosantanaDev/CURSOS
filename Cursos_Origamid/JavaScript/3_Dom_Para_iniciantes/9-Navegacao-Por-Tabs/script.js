// Site Mozila Develop = Element Propriety
document.documentElement.className += " js";


const tabmenu = document.querySelectorAll(".js-tabmenu li");
const tabcontent = document.querySelectorAll(".js-tabcontent section");
tabcontent[0].classList.add("ativo");

function tabMenuSite() {
  function activeTab(index) {
    tabcontent.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabcontent[index].classList.add("ativo");
  }

  tabmenu.forEach((img, index) => {
    img.addEventListener("click", () => {
      activeTab(index);
    });
  });

}

window.onload = function () {
  tabMenuSite();
}













