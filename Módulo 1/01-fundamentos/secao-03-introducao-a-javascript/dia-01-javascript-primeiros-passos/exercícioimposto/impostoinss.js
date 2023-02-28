let salariobruto = 2230.00;
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

