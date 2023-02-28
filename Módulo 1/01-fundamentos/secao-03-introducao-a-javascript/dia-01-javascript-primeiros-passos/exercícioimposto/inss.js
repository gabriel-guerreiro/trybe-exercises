let salariobruto = 2230.00;
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
} else if(salariobruto >= 1903.38){
    aliquota = 0.09;
    salariobase = salariobruto - salariobruto * aliquota;
    if(salariobase >= 1903.98 && salariobase <= 2826.65){
        aliquotaIR = 0.075;
        dedutível = 142.80;
        salarioliquido = salariobase - (salariobase * aliquotaIR - dedutível);
        console.log('seu salário é: '+ salarioliquido);
    }
} else if(salariobruto >= 2594.92){
    aliquota = 0.11;
    salariobase = salariobruto - salariobruto * aliquota;
    if(salariobase > 2826.66 && salariobase <= 3751.05){
        aliquotaIR = 0.15;
        dedutível = 353.80;
        salarioliquido = salariobase - (salariobase * aliquotaIR - dedutível);
        console.log('seu salário é '+ salarioliquido);

    }
} else if(salariobruto > 3751.05){
    aliquota = 0.15; //corrigir aliquota maxima 570 reais;
    salariobase = salariobruto - salariobruto * aliquota;
    if(salariobase > 3751.05 && salariobase <= 4664.68){
        aliquotaIR = 0.225;
        dedutível = 636.13;
        salarioliquido = salariobase - (salariobase * aliquotaIR - dedutível);
        console.log("seu salário é " + salarioliquido);

    }

}