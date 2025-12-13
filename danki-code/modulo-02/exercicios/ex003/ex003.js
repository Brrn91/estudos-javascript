var numero1 = prompt('Digite o primeiro número:');
var operacao = prompt('Digite a operação (+, -, * ou /):');

while (
  operacao != '+' &&
  operacao != '-' &&
  operacao != '*' &&
  operacao != '/'
) {
  alert('Por favor, digite uma operação válida.');
  operacao = prompt('Digite a operação (+, -, * ou /):');
}

var numero2 = prompt('Digite o segundo número:');

// Funções para converter string em números.
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

var resultado = 0;
if (operacao === '+') {
  resultado = numero1 + numero2;
} else if (operacao === '-') {
  resultado = numero1 - numero2;
} else if (operacao === '*') {
  resultado = numero1 * numero2;
} else if (operacao === '/') {
  resultado = numero1 / numero2;
}

alert('O resultado final é ' + resultado);
