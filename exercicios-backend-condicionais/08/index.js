const idade = 10;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

let permitidoMeia = idade < 18 || ehEstudante === true;

if (idade < 12 || idade > 65 || possuiPatologia === true || altura < 150) {
    console.log("ACESSO NEGADO")
} else if (permitidoMeia) {
    console.log("10 reais")
} else {
    console.log("20 reais")
}