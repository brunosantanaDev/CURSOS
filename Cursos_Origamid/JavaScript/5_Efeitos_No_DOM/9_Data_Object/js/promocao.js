const agora = new Date();
const promocao = new Date('December 24 2018 23:59');

function converterEmDias(time) {
  return time / (24 * 60 * 60 * 1000);
}
console.log(agora.getTime(),converterEmDias(agora))

const diasAgora = converterEmDias(agora);
const diasPromocao = converterEmDias(promocao);

const faltam = diasPromocao - diasAgora;