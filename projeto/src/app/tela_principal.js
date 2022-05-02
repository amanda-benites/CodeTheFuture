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



// let nota = 9.5;
// let texto = `Minha nota na prova foi ${nota}`; //adicionar a variável ao texto
// console.log(texto);



// const expressao = (1>3) || (8<10); // boolean - OR
// console.log(expressao);

// const expressao = (1>3) && (8<10); // boolean - AND
// console.log(expressao);

// const expressao = (1>3) && (8<10); // boolean - AND - 
// console.log(!expressao); // NOT - ! - contrário



// const nomes = ["Amanda", "Talita", "Marcele", "Larissa"];
// console.log("nomes: ", Array.isArray(nomes));
// nomes.push("Leticia"); //push - adiciona valores depois que a array foi criada
// nomes.splice(1, 1); // splice - remover a variavel da array
// console.log("nomes: ", nomes);
// console.log("Qtd itens ", nomes.length);



// const nomes = ["Amanda", "Talita", "Marcele", "Larissa"];
// console.log("nomes: ", nomes[0]);
// console.log("nomes: ", nomes.includes("Ana"));
// console.log(nomes. indexOf("Marcele")); // determinar a posição (index) de alguma variáves

// const valores = [2, 5, 7];
// const valoresNegativos = valores.map(valor => valor*-1); // Map: realiza uma função - transforma todos os valores

// //const valoresMaiores5 = valores.filter(valor => valor >= 5); // Filter: retorna o valor se ele passar por uma condição

// console.log("VALOR ", valores);
// console.log("valoresNegativos5 ", valoresMaiores5);



// const objAluno = {
//     nome: "Camila"
//     , idade: 15
// }

// const propriedade = "nome";

// objAluno.cpf = 85838985020;
// objAluno["sexo"] = "F";

// delete objAluno.cpf;

// console.log(objAluno);
// // console.log(objAluno["nome"]);3
// // console.log(objAluno[propriedade]);



// const num = null; // numero sem valor

// if(num === null) {
//     console.log("nulo")
// }



// const num = 5

// console.log(typeof num); // determina qual o tipo da variável



// const num = 6;

// if(num <= 0) {
//     console.log("Número menor ou igual a 0");
// } else if (num % 2 === 0) {
//     console.log("Número par");
// } else {
//     console.log("Número impar");
// }



// const dia = "quarta";

// switch(dia) { // grupo de casos para não ficar repetindo os condicionais
//     case "segunda":
//         console.log("Livro mat");
//         break;
//     case "terça":
//         console.log("Livro geo");
//         break;
//     case "quarta":
//         console.log("Livro hist");
//         break;
//     default:
//         console.log("Caderno"); // sempre deve aparecer
// }



// const num = 3;

// const mensagem = num % 2 === 0 ? "Número par" : "Número ímpar" // ? -> questiona se é verdadeiro ou falso - : -> é o senao ----- condiç]ao ternário
// console.log(mensagem)



// const nomes = ["Amanda", "Alex", "Bruna"];

// // console.log(nomes[0]);
// // console.log(nomes[1]);
// // console.log(nomes[2]);

// for(let i = 0; i < nomes.length; i++) { // i -> posições da array, comeca em 0 por ser a primeira posição / i<nomes.length -> determina até que pnto executa o for / i++ -> adiciona o 1 no valor de i, levando para apróxima posição
//     console.log(nomes[i])
// }



// const nomes = ["Amanda", "Alex", "Bruna"]
// let todosNomes = "";
// for(let i = 0; i < nomes.length; i++) { 
//     todosNomes += `, ${nomes[i]}`
// }

// console.log(todosNomes)



// const nome = ["Bia", "Camila", "Carla", "Denise", "Duda"];
// let todosNomes = "";
// for (let i = 0; i < nome.length; i++) {
//     if (nome[i].startsWith("C")) {
//         continue // continua o código, pulando o caso que não condiz com a condição
//     }
//     console.log(nome[i]);
// }



// const alunas = ["Ana", "Bruna", "Carla"];

// let i = 0;

// while(i<alunas.length){ // while -> enquanto algo for verdade ele ocorre
//     console.log(alunas[i]);
//     i++
// }



// function primeiraFuncao(nome) {
//     console.log("Primeira mensagem de ", nome) 
// }
// primeiraFuncao("Amanda");



// const texto = "ABC"; // parametros primitivos (const, string, num, boolean, null, undefined) não são alterados do lado de fora da função, arrays são
// primeiraFuncao();

// function primeiraFuncao(parametro1) {
//     parametro1 = "teste";
// }

// console.log(texto);

// const nome = ["Ana"];
// primeiraFuncao(nome);

// function primeiraFuncao(nome) {
//     nome.push("Carol");
// }

// console.log(nome);



// function soma(valor1, valor2) {
//     return valor1 + valor2; // retorna a soma dos valores
// }

// const valoresSomados = soma(2, 3);
// console.log(valoresSomados)



// const soma = (valor1, valor2) => valor1+valor2;


// const valoresSomados = soma(2, 3);
// console.log(valoresSomados)



var total = tasks.reduce(getTotal, 0);
function getTotal(total, item) {
 return total + (item.time * item.quantity);
}