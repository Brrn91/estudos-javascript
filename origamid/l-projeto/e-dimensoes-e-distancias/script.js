const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const amimaisTop = listaAnimais.offsetTop;
console.log(height);

const primeiroH2 = document.querySelector('h2');
const h2Left = primeiroH2.offsetLeft;

const rect = primeiroH2.getBoundingClientRect();

console.log(rect.top);

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset,
);
