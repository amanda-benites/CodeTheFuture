// let num = 3.4e5; // para fazer a notação exponencial
// console.log(num);


// let num = 3.56
// console.log(Number.parseInt(num)) // para utilizar apenas a parte inteira do número - pesquisar as funções do Number no google


// let num = 3.56;
// num = Number.parseInt(num);
// console.log(Math.pow(num,2)); // para realizar a potência


// const numNaN = "abc";
// console.log(isNaN(numNaN)); // isNaN - pergunta "Isso é um NaN", vai retornar "True" caso for ou "False" caso seja um número. O === (testar se duas afirmações são iguais) não funciona para Nan
// console.log(isNaN(10));
// console.log(Math.pow(numNaN, 2)); // NaN não é um número, impossível de calcular


// const numInfinity = 7/0;
// console.log("numInfinity: ", numInfinity);
// console.log(numInfinity === Infinity); // O === (testar se duas afirmações são iguais) funciona para Infinity


// const a = " hihi";
// const b = 7/0;
// const c = 10;

// // Nan - FALSE
// console.log("A: ", isFinite(a));
// // Infinity - FALSE
// console.log("B: ", isFinite(b));
// // Valido
// console.log("C: ", isFinite(c));


// let num = 10;

// console.log("1: ", ++num)
// console.log("2: ", ++num)
// console.log("Por fim: ", num)

// let num = 10;

// console.log("1: ", num++)
// console.log("2: ", num++)
// console.log("Por fim: ", num)


// let a = "I'm";
// let b = 'I\'m' // usar barra invertida nas aspas simples para declarar str quando usar alguma aspas simples no texto

// console.log(a);
// console.log(b);


// let a = ["A", "B", "A", "C", "A", "T", "E"];

// let fruta = "abacate";
// console.log(fruta.length); // O length conta a quantidade de caracteres
// if(fruta. length > 4) {
//     console.log("MAIOR QUE 4")
// }
// console.log(fruta[3]);


// let animal = "CaChoRRo";
// console.log(animal.toUpperCase(animal)) // deixar tudo maiúsculo


// let animal = "CaChoRRo";
// console.log(animal.toLowerCase(animal)) // deixar tudo minúsculo


// let animal = "Gato, cachorro, papagaio";
// console.log(animal.includes('cachorro')); // verificar se tem a variavel


// let animal = "Gato, cachorro, papagaio";
// animal += ", urso"; // adiciona a palavra

// console.log(animal);


let nota = 9.5;
let texto = `Minha nota na prova foi ${nota}`; //adicionar a variável ao texto
console.log(texto);