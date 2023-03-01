let array = [3,4,5,7,10];
let variable = 4;

for (let index = 0; index < array.length; index += 1){
    if (variable === array[index]){
        console.log("A posição do item é " + array.indexOf(array[index]))
    } else {
        console.log("Elemento não encontrado");
    }
}