// Primeira parte
const promo = [
  { product: 'bola de beach tennis', price: 29.99 },
  { product: 'mochila de trilha 20 litros', price: 120.99 },
  { product: 'capacete de ciclista', price: 180.59 },
  { product: 'toalha compacta de secagem', price: 39.99 },
  { product: 'kit 5 camisetas Dry Fit', price: 99.99 },
  { product: 'caneleiras de peso - 3kg (par)', price: 44.99 },
  { product: 'bola de ginástica e pilates', price: 149.59 },
  { product: 'óculos de natação', price: 18.99 },
  { product: 'capa protetora de prancha de surf', price: 89.59 },
  { product: 'bola de basquete', price: 39.99 },
];


const button = document.querySelector('#send-button');

button.addEventListener('click', () => {
  const name = document.querySelector('#name-id').value;
  const number = document.querySelector('#number-id').value;

  showPromo(name, number);
});

const showPromo = (name, number) => {
  const firstText = document.querySelector('#text-initial');
  const secondText = document.querySelector('#text-final');
  const productObject = checkNumber(parseInt(number));

  firstText.innerHTML = `Boas-vindas, ${name}!`;
  secondText.innerHTML = `A promoção do dia é: 
    ${productObject.product} no valor de R$ ${productObject.price}`;
}

// Segunda parte
const checkNumber = (number) => {
  return promo[number - 1];
}

const clients = [
  {
    name: 'João da Silva',
    age: 28,
    email: 'joao.silva@gmail.com',
    phone: '(11) 5555-5555',
    address: {
      street: 'Rua dos Lírios',
      number: 123,
      neighborhood: 'Jardim Primavera',
      city: 'São Paulo',
      state: 'SP',
      cep: '01234-567',
    },
  },
  {
    name: 'Maria Souza',
    age: 35,
    email: 'maria.souza@hotmail.com',
    address: {
      street: 'Rua dos Cravos',
      number: 456,
      neighborhood: 'Copacabana',
      city: 'Rio de Janeiro',
      state: 'RJ',
      cep: '12345-678',
    },
  },
  {
    name: 'Pedro Oliveira',
    age: 42,
    email: 'pedro.oliveira@gmail.com',
    address: {
      street: 'Rua das Margaridas',
      number: 789,
      neighborhood: 'Boa Viagem',
      city: 'Recife',
      state: 'PE',
      cep: '23456-789',
    },
  },
  {
    name: 'Ana Santos',
    age: 25,
    email: 'ana.santos@gmail.com',
    phone: '(71) 5555-5555',
    address: {
      street: 'Rua dos Girassóis',
      number: 1011,
      neighborhood: 'Barra',
      city: 'Salvador',
      state: 'BA',
      cep: '34567-890',
    },
  },
  {
    name: 'Luiz Costa',
    age: 32,
    email: 'luiz.costa@hotmail.com',
    address: {
      street: 'Rua das Acácias',
      number: 1213,
      neighborhood: 'Centro',
      city: 'Belo Horizonte',
      state: 'MG',
      cep: '45678-901',
    },
  },
  {
    name: 'Isabela Almeida',
    age: 37,
    email: 'isabela.almeida@gmail.com',
    phone: '(21) 5555-5555',
    address: {
      street: 'Rua das Hortênsias',
      number: 1415,
      neighborhood: 'Botafogo',
      city: 'Rio de Janeiro',
      state: 'RJ',
      cep: '56789-012',
    },
  },
  {
    name: 'Rafael Ferreira',
    age: 29,
    email: 'rafael.ferreira@hotmail.com',
    address: {
      street: 'Rua das Orquídeas',
      number: 1617,
      neighborhood: 'Pinheiros',
      city: 'São Paulo',
      state: 'SP',
      cep: '67890-123',
    },
  },
];

const findPersonByName = (name) => {
  // seu código aqui
  let mensagem;
  let person;
  try {
    for (let index = 0; index < clients.length; index += 1) {
      if (name === clients[index].name) {
        person = clients[index];
        mensagem = `Destinatário: ${clients[index].name}. Endereço: ${clients[index].address.street}, ${clients[index].address.number}, ${clients[index].address.neighborhood}, ${clients[index].address.city} - ${clients[index].address.state}. CEP: ${clients[index].address.cep} `
        return mensagem;
      }
    }
    if (!person)
      throw new Error('Pessoa não encontrada, tente novamente');
  }
  catch (error) {
    return error.message;
  }
};


const findPersonByPosition = (position) => {
  // seu código aqui
  let pos;
  try {
    for (let index = 0; index < clients.length; index += 1) {
      if (position < clients.length) {
        pos = position;
        return `Cliente: ${clients[pos].name}, email:${clients[pos].email}`;
      } else {
        throw new Error('Posição inválida, tente novamente');
      }
    }
  } catch (error) {
    return error.message;
  }
}

const arrayValidation = (array) => {
  if (array.length === 0) {
    throw new Error('nenhuma pessoa');
  }
};


const findPeopleByState = (state) => {
  // seu código aqui
  try {
    let pessoas = [];
    let statepos;
    for (let index = 0; index < clients.length; index += 1) {
      if (state === clients[index].address.state) {
        statepos = clients[index].address.state;
        pessoas.push(clients[index].name)
      }
    }
    if (pessoas.length === 0) {
      throw new Error('ops, nenhuma pessoa mora nesse estado, tente outro')
    }
    return pessoas;

  } catch (error) {
    return error.message;
  }

};