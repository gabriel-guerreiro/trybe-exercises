const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    let arrayfrase = frase.split(' ');
    for (let index = 0; index < arrayfrase.length; index += 1){
        if ( arrayfrase[index] ===  'x'){
            arrayfrase[index] = nome;
        }
    }
    return arrayfrase.join(' ');
};

console.log(substituaX('Amanda'));


const minhasSkills = (func) => {
    const skills = ['HTML','CSS','JavaScript'];
    let resultado = `${func} Minhas três principais habilidades são: ${skills}`;
    for (let index = 0; index < skills.length; index += 1){
        resultado = `${resultado} 
        - ${skills[index]}`;
    }
    return resultado;
}

console.log(minhasSkills(substituaX('Amanda')));