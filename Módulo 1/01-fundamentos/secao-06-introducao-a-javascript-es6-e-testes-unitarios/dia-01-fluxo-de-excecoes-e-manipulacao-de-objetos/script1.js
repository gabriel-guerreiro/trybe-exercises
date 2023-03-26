const studentRegister = (name, age) => {
    // seu código aqui
    try {
        if (!name || !age){
            throw new Error('Todas as informações são necessárias');
        }
        if (name && age < 18){
            throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
        } else if (name && age > 18){
            return `${name}, seja bem-vindo(a) à AuTrybe!`;
        }
    }
    catch (error) {
        return error.message;
    }
  };

  console.log(studentRegister('amanda', 17));