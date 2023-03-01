let clientesTrybeBank = ['Ada', 'John', 'Gus'];
let nome;
 
// escreva aqui sua função
function addclient(nome){
    if (typeof(nome) === 'string' ) {
        clientesTrybeBank.push(nome);
    }  
}
addclient('Gabriel');
console.log(clientesTrybeBank);