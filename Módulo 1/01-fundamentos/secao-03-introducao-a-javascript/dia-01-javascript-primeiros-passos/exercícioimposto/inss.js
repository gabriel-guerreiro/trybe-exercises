let salariobruto = 1300.00;
let aliquota;
let salariobase;

if(salariobruto <= 1556.64){
    //roda cálculo inss e retorna pra função abaixo
    aliquota = 0.08;
    salariobase = salariobruto - salariobruto * aliquota;
    if(salariobase <= 1903.98){
        console.log('Seu salário é isento de IR: R$' + salariobase + " e sua alíquota do INSS é de " + aliquota);
    }
}