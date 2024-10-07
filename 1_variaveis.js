// declaração de variáveis

// let idade = 19;
// var isGamer = false;
// const nome = 'Carlos';

// console.log(idade);

// redeclaração

// let idade = 30; // Erro: Não permite redeclaração
// var isGamer = true;
// const nome = 'João'; // Erro: Não permite redeclaração
// console.log(isGamer);

// reatribuição

// console.log(idade);
// idade = 29;
// isGamer = false;
// console.log(isGamer);
// nome = 'Marcos';

// Hoisting (Içamento / elevação) somente var

// var salgado = 9;
// console.log(salgado, pratinho);
// var pratinho = 15;

// var salgado = 9;
// console.log(salgado, pratinho);
// var pratinho = 15;

// Possíveis maneiras de declarar variáveis

// let name123;
// let Name123;
// let $name123;
// let _name123;

// Não dá pra fazer

// let 123Name123;
// let @123name;
// let "name";
// let 'name';

// Escopo

// function testeEscopo() {
//     if (true) {
//         var y = 20;
//         let x = 10;
//     }
//     console.log(x)
//     console.log(y)
// }
// testeEscopo()