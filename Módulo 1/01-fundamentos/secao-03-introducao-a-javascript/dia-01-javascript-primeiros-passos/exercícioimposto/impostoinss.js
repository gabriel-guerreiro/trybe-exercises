let salariobruto = 3000.00;
let aliquota;
let aliquotaIR;
let dedutível;
let salariobase;
let salarioliquido;

if (salariobruto <= 1556.64) {
    //roda cálculo inss e retorna pra função abaixo
    aliquota = 0.08;
    salariobase = salariobruto - salariobruto * aliquota;

} else if (salariobruto > 1556.64 && salariobruto <= 2594.92) {
    aliquota = 0.09;
    salariobase = salariobruto - salariobruto * aliquota;

} else if (salariobruto > 2594.92 && salariobruto <= 5189.82) {
    aliquota = 0.11;
    salariobase = salariobruto - salariobruto * aliquota;

} else if (salariobruto > 5189.82) {
    aliquota = 570.88; 
    salariobase = salariobruto - salariobruto * aliquota;
}

console.log(salariobase);

if (salariobase <= 1903.98){
    aliquotaIR = 0;
    dedutível = 0;
    salariobase = salariobruto -(salariobruto * aliquotaIR - dedutível);
} else if (salariobase > 1903.98 && salariobase <= 2826.65) {
    aliquotaIR = 0.075;
    dedutível = 142.80;
    salariobase = salariobruto -(salariobruto * aliquotaIR - dedutível);
}

console.log(salariobase);

