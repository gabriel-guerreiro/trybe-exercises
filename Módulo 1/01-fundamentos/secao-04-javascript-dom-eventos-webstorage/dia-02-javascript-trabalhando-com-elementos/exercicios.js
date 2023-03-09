

document.getElementById("elementoOndeVoceEsta").parentElement.style.color = "red";

document.getElementById("primeiroFilhoDoFilho").innerText = "Texto aleatório";

console.log(document.getElementById("elementoOndeVoceEsta").previousElementSibling);

console.log(document.getElementById("elementoOndeVoceEsta").nextSibling);

console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling);

console.log(document.getElementById("pai").childNodes[5]);

let pai = document.getElementById('pai');
let irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);

let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let filhoelementoondevoceesta = document.createElement('section');
filhoelementoondevoceesta.id = 'filhoelementoondevoceesta';
elementoOndeVoceEsta.appendChild(filhoelementoondevoceesta);

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const primeiroFilhoDoFilhoDoFilho = document.createElement('section');
primeiroFilhoDoFilhoDoFilho.id = 'primeiroFilhoDoFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(primeiroFilhoDoFilhoDoFilho);

console.log(document.getElementById('primeiroFilhoDoFilhoDoFilho').parentNode.parentNode.nextSibling.nextSibling);

