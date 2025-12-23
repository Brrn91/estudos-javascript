//Objetos

var pessoa = {
  nome: 'Lucas',
  idade: 28,
}

console.log(pessoa.nome);

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

// Dot notation get e set
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84e',
}

menu.backgroundColor = '#000';

menu.color = 'blue';

menu.esconder = function() {
  console.log('Escondi');
}

var bg = menu.backgroundColor;