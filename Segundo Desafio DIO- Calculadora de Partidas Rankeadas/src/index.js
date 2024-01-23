function calcularSaldoVitorias(vitorias, derrotas) {
    return vitorias - derrotas;
}

function calcularNivel(saldo) {
    if (saldo <= 10) {
        return "Ferro";
    } else if (saldo <= 20) {
        return "Bronze";
    } else if (saldo <= 50) {
        return "Prata";
    } else if (saldo <= 80) {
        return "Ouro";
    } else if (saldo <= 90) {
        return "Diamante";
    } else if (saldo <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}


const quantidadeVitorias = 23;
const quantidadeDerrotas = 7;

const saldo = calcularSaldoVitorias(quantidadeVitorias, quantidadeDerrotas);
const nivel = calcularNivel(saldo);

console.log(`O Herói tem um saldo de ${saldo} e está no nível de ${nivel}.`);
