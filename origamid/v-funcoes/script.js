function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(total);

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

imc(80, 1.8); // 80 e 1.80 são os argumentos
imc(60, 1.7); // 60 e 1.70 são os argumentos
