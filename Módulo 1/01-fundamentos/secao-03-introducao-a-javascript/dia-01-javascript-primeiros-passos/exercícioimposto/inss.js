let salariobruto = 3300.00;
let aliquota;
let aliquotaIR;
let dedutível;
let salariobase;
let salarioliquido;

if(salariobruto <= 1556.64){
    //roda cálculo inss e retorna pra função abaixo
    aliquota = 0.08;
    salariobase = salariobruto - salariobruto * aliquota;
    if(salariobase <= 1903.98){
        aliquotaIR = 0;
        dedutível = 0;
        salarioliquido = salariobase - (salariobase * aliquotaIR - dedutível);
        console.log('Seu salário é isento de IR: R$' + salarioliquido + " e sua alíquota do INSS é de " + "8%");
    }
} else if(salariobruto > 1556.64 && salariobruto <= 2594.92){
    aliquota = 0.09;
    salariobase = salariobruto - salariobruto * aliquota;
    if(salariobase > 1903.98 && salariobase <= 2826.65){
        aliquotaIR = 0.075;
        dedutível = 142.80;
        salarioliquido = salariobase - (salariobase * aliquotaIR - dedutível);
        console.log('Seu salário tem alíquota de IR de 7,5% com dedutível de R$142,80, e INSS de 9% e seu valor é: '+ salarioliquido);
    }
} else if(salariobruto > 2594.92 && salariobruto <= 5189.82){
    aliquota = 0.11;
    salariobase = salariobruto - salariobruto * aliquota;
    if(salariobase > 2826.66 && salariobase <= 3751.05){
        aliquotaIR = 0.15;
        dedutível = 353.80;
        salarioliquido = salariobase - (salariobase * aliquotaIR - dedutível);
        console.log('Seu salário tem alíquota de IR de 15% com dedutível de R$353,80, e INSS de 11% e seu valor é: '+ salarioliquido);

    }
} else if(salariobruto > 5189.82){
    aliquota = 0.15; //corrigir aliquota maxima 570 reais;
    salariobase = salariobruto - salariobruto * aliquota;

}