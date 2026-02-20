/*
function Pessoa(){
  this.nome = 'Lucas';
}

var pessoa = new Pessoa();
var pessoa2 = new Pessoa();

pessoa.nome = 'Bruno';

console.log(pessoa.nome);
*/

function Pessoa(){
  this.nome = 'Lucas';
  this.idade = 28;
  this.printNome = function(){
    console.log(this.nome);
  };
  this.returnAnimal = function(animal){
    return animal;
  }
}

function Animal(){
  this.nome = 'Cachorro';
  this.raca = 'Salsicha';
}

var pessoa = new Pessoa();
var animal = new Animal();

animal.raca = 'Labrador';

console.log(pessoa.returnAnimal(animal).raca);