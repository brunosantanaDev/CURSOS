export default class ToolTip {
  constructor(tooltips){
    this.tooltips = document.querySelectorAll(tooltips);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 10}px`;
    if(event.pageX + 240 > window.innerWidth){
      this.tooltipBox.style.left = `${event.pageX - 180}px`;
    }else{
      this.tooltipBox.style.left = `${event.pageX + 10}px`;
    }
  }

  onMouseLeave() {
    this.tooltipBox.remove();
    this.element.removeEventListener("mouseleave", this.onMouseLeave);
    this.element.removeEventListener("mousemove", this.onMouseMove);
  }
  
  criarTooltipBox(element) {
    const text = element.getAttribute("aria-label");
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  onMouseOver(event) {
    const el = event.currentTarget;
    this.criarTooltipBox(el);
    el.addEventListener("mousemove", this.onMouseMove);
    el.addEventListener("mouseleave", this.onMouseLeave);
    this.element = el;
  }

  addTooltipsEvent(){
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init(){
    if(this.tooltips.length){
      this.addTooltipsEvent();
    }
   return this;
  }
}
