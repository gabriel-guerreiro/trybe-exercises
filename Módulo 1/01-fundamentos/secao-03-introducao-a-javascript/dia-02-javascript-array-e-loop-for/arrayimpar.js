let numbers = [200,100,300,400];
let count = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 !== 0){
        count += 1;      
    }
}

if (count == 0) {
    console.log("Não existem números primos neste array");
}

console.log(count);