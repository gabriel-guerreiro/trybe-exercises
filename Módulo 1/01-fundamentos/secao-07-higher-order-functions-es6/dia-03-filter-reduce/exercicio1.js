const countries = require('./data.js');

// 1
// const expectedResult = 120797034;
const getPopulation = () =>
    // retorne o seu código aqui
    countries.reduce((acc, curr) => acc + curr.population, 0);


// console.log(getPopulation());

// 2

// const expectedResult = 4311757;
const getTotalArea = () =>
    // retorne seu código aqui
    countries.reduce((acc, curr) => acc + curr.area, 0);

// console.log(getTotalArea());

// const expectedResult = {
//     name: 'American Samoa',
//     region: 'Oceania',
//     currencies: [{ code: 'USD', name: 'United States Dollar' }],
//     capital: 'Pago Pago',
//     population: 55197,
//     area: 199
//   }

const longestName = () =>
    // retorne seu código aqui
    countries.reduce((acc, curr) => acc.name.length > curr.name.length ? acc : curr);


//console.log(longestName());

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

const letters = names.join('').toLowerCase().split('');

//   const expectedResult = 20;
//   const countA = () => {
//     // retorne seu código aqui
//     let count = 0;
//     return letters.reduce((acc, curr) => (acc === 'a' || curr === 'a') ? count += 1 : null, count);

// }
console.log(letters);


const expectedResult = 20;
const countA = () => {
    // retorne seu código aqui
    let count = 0;
    return letters.reduce((acc, curr) => curr === 'a' ? acc += 1 : acc, 0);
}

console.log(countA());

// O index 0 do array `students` equivale ao index 0 do array `grades`
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
const resultadoEsperado = [
 { name: 'Pedro Henrique', average: 7.8 },
 { name: 'Miguel', average: 9.2 },
 { name: 'Maria Clara', average: 8.8 },
];
const studentAverage = () => {
  // retorne seu código aqui
  const medias =  grades.map((element) => element.reduce((acc, curr) => acc + curr) / 5);
  const nameAndAverage = students.map((student, index) => ({
    name: student,
    average: medias[index],
  }));
  return nameAndAverage;
}

console.log(studentAverage());







