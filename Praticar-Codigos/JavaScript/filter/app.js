const precos = [
  'Creditos avista',
  'R$ 200,54',
  'R$ 500,00',
  'Teste Unitarios',
  'Limpar PC',
  'R$ 920,65',
  'R$ 120,27',
  'Tudo Avulso',
];

const verifySome = precos.some((preco) => {
  return preco === 'Tudo Avulso';
});

console.log(verifySome);
const filterPrice = precos.filter((preco) =>  preco.includes('R$ '));

const priceLimp = filterPrice.map((preco) => {
  const trocaSifrao = preco.replace('R$ ', '');
  return Number(trocaSifrao.replace(',', '.'));
});

console.log(priceLimp);
