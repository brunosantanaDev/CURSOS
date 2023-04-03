export default function dateObject() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemanaHtml = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemanaHtml = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaHoje = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemanaHtml.indexOf(diaHoje) !== -1;
  const horarioAberto = horarioAgora >= horarioSemanaHtml[0] && horarioAgora < horarioSemanaHtml[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("ativo");
  }
}
