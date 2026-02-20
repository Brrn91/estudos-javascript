var nome = 'Lucas'; //String
var idade = 28; //Number
var time = null; //Null
var simbolo = Symbol(); //Símbolo
console.log(typeof nome);

//Concatenando strings
var nome = 'Lucas';
var sobrenome = 'Mafra';
var nomeCompleto = nome + ' ' + sobrenome; // nome + 'espaço' + sobrenome

console.log(nomeCompleto);

//Concatenando nomes com númmeros
var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols.';
console.log(frase);

//Concatenando com template string
var gols = 1000;
var frase2 = `Romário fez ${gols} gols.`
console.log(frase2);

// Declare uma variável contendo uma string
var diaDeHoje = "Hoje é dia de Finados!";
// Declare uma variável contendo um número dentro de uma string
var numero = "2025"
// Declare uma variável com a sua idade
var minhaIdade = 28;
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var meuNome = "Lucas"
var meuSobrenome = "Mafra"
var meuNomeCompleto = `${meuNome} ${meuSobrenome}`;
// Coloque a seguinte frase em uma variável: It's time
var frase3 = `It's time!`;
// Verifique o tipo da variável que contém o seu nome
console.log(typeof meuNome)