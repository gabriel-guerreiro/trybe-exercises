let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  function customerInfo(order) {
    // Adicione abaixo as informações necessárias.
    return 'Olá, ' + order.order.delivery['deliveryPerson'] + ' '+ order['name'] + ' ' +', Telefone: ' + order['phoneNumber'] + order.address['street'] + 'N: ' +order.address['number'] + 'AP:' +order.address['apartment'];
  }
  
  customerInfo(order);
  
  function orderModifier(order) {
    // Adicione abaixo as informações necessárias.
    order.order.delivery['deliveryPerson'] = 'Luiz Silva';
    return 'Olá, ' + order.order.delivery['deliveryPerson'] + ' o valor total do seu pedido de ' + ''
  }
  
  orderModifier(order);

  console.log(customerInfo(order));

