export default class AnimaNumeros {
   constructor(numeros, observerTarget, observerClass){
      this.observerTarget = document.querySelector(observerTarget);
      this.numeros = document.querySelectorAll(numeros);
      this.observerClass = observerClass;
      this.handleMutation = this.handleMutation.bind(this)
   }

   static incrementarNumero(numero){
    const total = +numero.innerText;
    const incremento = Number.parseInt(total / 100, 10);
    let start = 0;

    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
          clearInterval(timer);
      }
    }, 30 * Math.random());
   }

    animaNumeros() {
      this.numeros.forEach((elNumero) => {
         this.constructor.incrementarNumero(elNumero)
      });
    }

    handleMutation(mutation) {
      if (mutation[0].target.classList.contains(this.observerClass)) {
        this.observer.disconnect();
        this.animaNumeros();
      }
    }

    addMutationObserver(){
      this.observer = new MutationObserver(this.handleMutation);
      this.observer.observe(this.observerTarget, { attributes: true });
    }

    init(){
      if(this.numeros.length && this.observerClass && this.observerClass){
        this.addMutationObserver();
      }      
      return this;
    }
}
