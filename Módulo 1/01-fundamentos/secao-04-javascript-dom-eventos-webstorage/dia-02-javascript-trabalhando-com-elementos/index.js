console.log(document.querySelector('body'));
const body = document.querySelector('body');
body.id = 'body';
const tituloh1 = document.createElement('h1');
tituloh1.className = 'title';
body.appendChild(tituloh1);

document.getElementsByClassName('title')[0].innerHTML = 'TrybeTrip - Agência de Viagens';

const main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);

const section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);

const p = document.createElement('p');
section.appendChild(p);
p.innerHTML = 'Conteúdo de texto aleatório gerado por mim';

const sectionleft = document.createElement('section');
sectionleft.className = 'left-content';
main.appendChild(sectionleft);

const sectionright = document.createElement('section');
sectionright.className = 'right-content';
main.appendChild(sectionright);

const img = document.createElement('img');
img.className = 'small-image';
img.src = 'https://picsum.photos/200';
sectionleft.appendChild(img);

const ul = document.createElement('ul');
sectionright.appendChild(ul);

const array = ['um','dois','tres','quatro','cinco', 'seis', 'sete', 'oito','nove','dez']

for (let index = 0; index < array.length; index += 1){
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = array[index];
}

for (let index = 0; index < 3; index += 1){
    const h3x3 = document.createElement('h3');
    main.appendChild(h3x3);
}
console.log(document.querySelectorAll('h3'));
const h3array = document.querySelectorAll('h3');
for (let index = 0; index < document.querySelectorAll('h3').length; index += 1){
    h3array[index].className = 'description';
}

console.log(document.querySelector('.main-content .left-content'));

document.querySelector('.main-content .left-content').remove();

document.querySelector('.right-content').style.marginRight = 'auto';

document.querySelector('.center-content').style.backgroundColor = 'green';

console.log(document.querySelectorAll('li')[9]);

document.querySelectorAll('li')[9].remove();
document.querySelectorAll('li')[8].remove();

