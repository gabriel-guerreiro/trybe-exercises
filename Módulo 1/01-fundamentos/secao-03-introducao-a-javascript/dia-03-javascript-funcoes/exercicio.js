function sum(add) {
    let saldo = 2300;
    saldo = saldo + add;
    return 'Este é o seu novo saldo após o crédito: ' + saldo;
}
console.log(sum(100));

function subtract(remove) {
    let saldo = 1000;
    saldo = saldo - remove;
    return 'Este é o seu novo saldo após o desconto: ' + saldo;
}
console.log(subtract(150));

function mult(multiplier) {
    let saldo = 5000;
    saldo = saldo * multiplier;
    return 'Este é o seu saldo multiplicado: ' + saldo;
}
console.log(mult(20));

function divide(divisor){
    let saldo = 30000;
    saldo /= divisor;
    return 'Este é o seu saldo destruído: ' + saldo;
}
console.log(divide(100));
