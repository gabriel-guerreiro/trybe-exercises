let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};
for (let key in leitor.livrosFavoritos) {
    console.log("O livro favorito de Julia Pessoa se chama " + leitor.livrosFavoritos[0].titulo);
}
let elemento = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
}

leitor.livrosFavoritos.push(elemento);
console.log(leitor.livrosFavoritos);

//for (let index = 0; ){
//    count += 1;
 //   console.log(count);
//}
let count = 0;
for (let index = 0; index < leitor.livrosFavoritos.length; index += 1){
    count += 1;
}
console.log('Julia tem '+ count +' livros favoritos')