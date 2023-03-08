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
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNightShift = (lesson, turno, valor) => {
  lesson[turno] = valor; 
};
addNightShift(lesson2, 'turno', 'noite');

const listKeys = (object) => {
  for (let key in object){
    console.log(key);
  }
}

const objSize = (object) => {
    let count = 0;
    for (let elements in object){
        count += 1;
    }
    console.log(count);
}

const objValues = (object) => {
    for (let elements in object){
    console.log(object[elements]);
    }
}

objValues(lesson1);