//valor do produto comprado.
const valorDoProduto = 1000;

//quantidade de parcelas
const quantidadeDoParcelamento = 12;

//valor pago
const valorPago = 200;

let valorParcela = valorDoProduto / quantidadeDoParcelamento
let parcelasFaltantes = (valorDoProduto - valorPago) / valorParcela

console.log(`Deve pagar ${parcelasFaltantes.toFixed(0)} parcelas de ${valorParcela.toFixed(2)} reais`)
