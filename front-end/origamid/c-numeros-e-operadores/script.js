var idade = 28;
console.log(idade);

//Operadores aritiméticos

var total1 = 10 + 5 + 10; // 25
var divisao = 200 / 5; // 40
var modulo = 3578941945 % 3; // 1
console.log(modulo);

// Operadores aritiméticos em strings

var soma = '100' + 50; // 10050 (Concatena o a string ao número)
var subtracao = '100' - 50; // 50 (A subtração converte a striing em número)
var multiplicacao = '100' * '2' // 200 (A multiplicação converte a striing em número)
var divisao = 'Comprei 10' / 2; // NaN (Não faz o resultado pois tem caractéres junto a string.)

//Operadores aritiméticos unários

var incremento = 5
console.log(incremento++);
console.log(incremento);

var decremento = 5;
console.log(decremento--);
console.log(decremento);

var idade = "28";
var somaIdade = 5;
console.log(+idade + somaIdade); //Sonal de "+" antes da var idade (+idade) transforma a string em número.

// Exercícios
// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total); // 35

// Crie duas expressões que retornem NaN
var idade2 = "Minha idade é 28" / 2;
var numero1 = 'Meu número favorito é 7' * 77;
console.log(idade2, numero1);

// Somar a string '200' com o número 50 e retornar 250
var soma2 = +'200' + 50;
console.log(soma2);

// Incremente o número 5 e retorne o seu valor incrementado
var incremento2 = 5;
console.log(++incremento2);

// Como dividir o peso por 2?
var numero = +"80" / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
console.log(peso);