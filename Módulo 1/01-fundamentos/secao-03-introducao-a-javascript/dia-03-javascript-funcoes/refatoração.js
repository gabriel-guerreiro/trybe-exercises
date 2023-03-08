let clientesTrybeBank = ['Ada', 'John', 'Gus'];


function verifiestypeofClient(cliente) {
    if (typeof cliente === 'string') {
        let clienteEncontrado = false;
    }
}

function verifiesclientsTrybeBank(cliente) {
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
        if (cliente === clientesTrybeBank[index]) {
            clientesTrybeBank.splice(index, 1);
            clienteEncontrado = true;
            return 'Cliente excluída(o) com sucesso.';
        } if (clienteEncontrado === false) {
            return 'Cliente não encontrado'
        }
        else {
            return 'O parâmetro passado deve ser do tipo "string"!';
        }

    }
}