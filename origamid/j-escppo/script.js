// var carro = 'Fusca';

// function montarCarro () {
//   console.log(carro);
// };

// montarCarro(); // Fusca no console
// console.log(carro); // Erro: carro is no defined

//Escopo de bloco

// if (true) {
//   let mes = 'Dezembro';
//   console.log(mes);
// }

// console.log(mes);

// for(let i =0; i < 10; i++) {
//   console.log(`Numero ${i}`);
// }

// const semana = 'Sexta';
// // semana = 'Quinta';

// console.log(semana);

const data = {
  ano: 2018,
  mês: 'Dezembro',
}
console.log(data);
data.ano = 2020; // Não funciona: data é uma constante
data.dia = 25; // Funciona: o obejeto pode ser modificado
console.log(data);