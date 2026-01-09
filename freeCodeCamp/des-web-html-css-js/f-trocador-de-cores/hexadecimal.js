const hexadecimal = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];
const botao = document.getElementById('botao');
const cor = document.querySelector('.cor');

botao.addEventListener('click', () => {
  let corHexadecimal = '#';
  for (let i = 0; i < 6; i++) {
    corHexadecimal += hexadecimal[selecionarNumeroAleatorio()];
  }
  cor.textContent = corHexadecimal;
  document.body.style.backgroundColor = corHexadecimal;
});

function selecionarNumeroAleatorio() {
  return Math.floor(Math.random() * hexadecimal.length);
};