// Exemplo de JSON
const faturamentoMensal = [
    220.5, 350.7, 0, 0, 150.1, 190.4, 0, 300.2, 0, 450.6, 
    0, 0, 400.5, 320.3, 0, 0, 0, 0, 500.4, 100.3, 150.2
];

function analisarFaturamento(faturamento) {
    const diasUteis = faturamento.filter(valor => valor > 0);
    const menorValor = Math.min(...diasUteis);
    const maiorValor = Math.max(...diasUteis);
    const mediaMensal = diasUteis.reduce((acc, val) => acc + val, 0) / diasUteis.length;
    const diasAcimaMedia = diasUteis.filter(valor => valor > mediaMensal).length;

    return { menorValor, maiorValor, diasAcimaMedia };
}

const resultado = analisarFaturamento(faturamentoMensal);

console.log(`Menor valor: ${resultado.menorValor}`);
console.log(`Maior valor: ${resultado.maiorValor}`);
console.log(`Dias acima da média: ${resultado.diasAcimaMedia}`);
