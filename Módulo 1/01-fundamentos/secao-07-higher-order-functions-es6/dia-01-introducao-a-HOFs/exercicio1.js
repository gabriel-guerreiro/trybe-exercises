const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

// Adicione seu código aqui

const exibe = (email) => {
    console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
}

emailListInData.forEach((item, posicao, array) => {
    exibe(item);
    console.log(`Sua posição é de: ${posicao}`);
    console.log(`A quantidade de pessoas no processo é : ${array.length}`);
})

