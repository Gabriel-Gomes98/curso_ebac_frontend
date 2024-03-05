// Calculo IMC

const pesoUsuario = 95;
const alturaUsuario = 1.93;
const imcUsuario = calculaImc(pesoUsuario, alturaUsuario)

const mensagem = `O seu peso é ${pesoUsuario}, sua altura é ${alturaUsuario} e seu IMC é ${imcUsuario.toFixed(.2)}.`; 

function calculaImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc;
}

console.log(mensagem);