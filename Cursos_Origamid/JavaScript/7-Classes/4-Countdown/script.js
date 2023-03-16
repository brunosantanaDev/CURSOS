
import countDown from "./count-down.js"

const diasParaONatal = new countDown('24 December 2023 23:59 GMT-0300')


setInterval(() => {   
    console.log(diasParaONatal.total)
}, 1000)






























