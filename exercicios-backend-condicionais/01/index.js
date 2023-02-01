const jogada1 = "tesoura"
const jogada2 = "pedra"

//seu código aqui

//verificar 3 combinações (pedra, papel e tesoura) e empates
if (jogada1 === "pedra" && jogada2 === "tesoura") {
    console.log(jogada1)
} else if (jogada1 === "pedra" && jogada2 === "papel") {
    console.log(jogada2)
} else if (jogada1 === "tesoura" && jogada2 === "papel") {
    console.log(jogada1)
} else if (jogada1 === "tesoura" && jogada2 === "pedra") {
    console.log(jogada2)
} else if (jogada1 === "papel" && jogada2 === "tesoura") {
    console.log(jogada2)
} else if (jogada1 === "papel" && jogada2 === "pedra") {
    console.log(jogada1)
} else {
    console.log("empate")
}
