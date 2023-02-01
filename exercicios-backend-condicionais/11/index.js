//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 600000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 59;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1700000;

let fórmula = (18 / 100 * rendaMensalEmCentavos) / 100;

if (rendaMensalEmCentavos > 200000 && mesesDecorridos < 60 && totalJaPagoPeloAluno < 1800000) {
    console.log(`Você deverá pagar ${fórmula.toFixed(0)} reais, pois recebe mais de 2.000 reais por mês`)
}

else if (rendaMensalEmCentavos <= 200000) {
    console.log("Você não precisa pagar, pois recebe menos de 2 mil")
} else if (mesesDecorridos > 60) {
    console.log("Você não precisa pagar, pois já excedeu 60 meses")
} else {
    console.log("Você não precisa pagar, pois já quitou o valor total")
} 