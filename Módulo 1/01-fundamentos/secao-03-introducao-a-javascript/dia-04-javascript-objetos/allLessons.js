let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 30,
  professor: 'Maria Clara',
  turno: 'noite',
};

let allLessons = Object.assign({}, {
  lesson1: lesson1,
  lesson2: lesson2,
  lesson3: lesson3,
})


console.log(allLessons);

const somaEstudantes = (lesson) => {
  let total = 0;
  let keys = Object.keys(lesson);
  for (let index = 0; index < keys.length; index += 1) {
    total += lesson[keys[index]].numeroEstudantes;
  }
  return total;
}

console.log(somaEstudantes(allLessons));

const getValueByNumber = (lesson, index) => {
  let array = Object.values(lesson);
  console.log(array[index]);
  return array[index];

}
getValueByNumber(lesson3, 3);

const keyPairExists = (object, key, value) => {
  let entries = Object.entries(object);
  let isEqual = false;
  for (let index in entries) {
    if (entries[index][0] === key && entries[index][1] === value) {
      isEqual = true;
    }
  }
  return isEqual;
}

console.log(keyPairExists(lesson3, 'turno', 'noite'));