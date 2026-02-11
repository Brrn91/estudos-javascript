const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const amimaisTop = listaAnimais.offsetTop;
console.log(height);

const primeiroH2 = document.querySelector('h2');
const h2Left = primeiroH2.offsetLeft;

const h2rect = primeiroH2.getBoundingClientRect();

console.log(h2rect.top);

if (h2rect.top < 0) {
  console.log( 'Passou do elemento!')
}

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset,
);

const small = window.matchMedia( '(max-width: 600px');

if(small.matches) {
  console.log('Usuário mobile');
} else {
  console.log('Usuário desktop');
}
