

let d1 = Math.ceil(Math.random() * 6);
console.log('resultado d1:', d1);
let d2 = Math.ceil(Math.random() * 6);

while (d1 !== d2) {
  d2 = Math.ceil(Math.random() * 6);
  console.log('resultado d2:', d2);
}
