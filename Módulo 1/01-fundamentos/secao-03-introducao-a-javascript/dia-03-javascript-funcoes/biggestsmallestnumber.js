function biggestSmallerNumber(array) {
    let bigger = array[0];
    let smaller = array[0];


    for (let index = 1; index < array.length; index += 1) {
        if (array[index] > bigger) {
            bigger = array[index];
        }
        if (array[index] < smaller) {
            smaller = array[index];
        }
    }
    return `Maior: ${bigger}
Menor: ${smaller}`;
};


console.log(biggestSmallerNumber([7, 2, 3, 1, 6, 9, 4, 5]));