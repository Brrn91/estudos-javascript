function Pessoa(){
  this.nome = 'Lucas';
}

var pessoa = new Pessoa();
var pessoa2 = new Pessoa();

pessoa.nome = 'Bruno';

console.log(pessoa.nome);