let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3 }
}

console.log(player.name);
console.log(player["medals"]);

player.datas = [2006, 2007, 2008, 2009, 2010, 2018];
console.log(player.datas);

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade e foi campea ' + player.datas.length + " vezes.")
console.log(player.medals.golden + ' e ' + player.medals.silver);




