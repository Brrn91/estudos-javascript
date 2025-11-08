// Boleanos
var possuiGraduacao = true;

if (possuiGraduacao) {
  console.log('É verdadeiro!');
} else {
  console.log('É falso!');
}

// Condicionais else if

var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiGraduacao) {
  console.log('É verdadeiro!');
} else if (possuiDoutorado) {
  console.log('Possui doutorado!');
} else {
  console.log('Não possui nada!');
}

// Verdadeiro ou falso

// Falso
// if(false)
// if(0) // ou -0
// if(NaN)
// if(null)
// if(undefined)
// if('') // ou "" ou ``

// Verdadeiro
// if(true)
// if(1)
// if(' ')
// if('andre')
// if(-5)
// if({})

// Operador Lógico de Negação !
// if(!true) // false
// if(!1) // false
// if(!'') // true
// if(!undefined) // true
// if(!!' ') // true
// if(!!'') // false

// Operadores de comparação
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true
