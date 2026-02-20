var nome = window.prompt('Qual é o seu nome?');
var idade = window.prompt('Qual é a sua idade?');
document.write(
  `Olá, ${nome}. Seu nome tem ${nome.length} letras e você tem ${idade} anos!`
);
document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}`);
document.write(`Seu nome em minúsculas é ${nome.toLowerCase()}`);
