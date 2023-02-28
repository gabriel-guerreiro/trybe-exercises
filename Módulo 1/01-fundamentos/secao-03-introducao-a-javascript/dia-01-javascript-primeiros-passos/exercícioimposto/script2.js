let custo = 12;
let imposto = custo * 0.2;

let venda = custo + imposto;


if (custo >= 0 && venda >= 0){
    console.log(venda);
} else if (custo < 0 || venda < 0){
    console.log('mensagem de erro');
}