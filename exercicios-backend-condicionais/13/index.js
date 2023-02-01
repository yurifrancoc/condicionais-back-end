//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "dinheiro";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

valorFinalCredito = valorDoProduto - (valorDoProduto * 5 / 100);
valorFinalCheque = valorDoProduto - (valorDoProduto * 3 / 100);
valorFinalDinheiroDebito = valorDoProduto - (valorDoProduto * 10 / 100);


if (tipoDePagamento === "credito") {
    console.log(`Valor a ser pago: ${valorFinalCredito} reais`)
} else if (tipoDePagamento === "cheque") {
    console.log(`Valor a ser pago: ${valorFinalCheque} reais`)
} else if (tipoDePagamento === "dinheiro" || "debito") {
    console.log(`Valor a ser pago: ${valorFinalDinheiroDebito} reais`)
} 