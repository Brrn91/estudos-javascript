var anoNascimento = prompt('Por favor, informe o ano de seu nascimento:');

while(anoNascimento >= 2026){
  alert('Por favor, informe seu ano de nascimento corretamente!');
  anoNascimento = prompt('Por favor, informe o ano de seu nascimento:');
}

var anoAtual = prompt('Em que ano estamos?');

var idade = anoAtual - anoNascimento;

alert('Você tem ' + idade + ' anos de idade!');