export default function dateObject(){
  const funcionamento = document.querySelector("[data-semana]")
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number)
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number)

  const dataAgora = new Date()
  const diaHoje = dataAgora.getDay()
  const horarioAgora = dataAgora.getHours()

  const semanaAberto = diasSemana.indexOf(diaHoje) !== -1
  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1])

  if(semanaAberto && horarioAberto){
    funcionamento.classList.add("ativo")
  }
}







