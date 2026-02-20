const cores = ['green', 'red', 'rgb(123, 122, 200)', '#b15b2e'];
const botao = document.getElementById('botao');
const cor = document.querySelector('.cor');

botao.addEventListener('click', () => {
  const numeroAleatorio = selecionarNumeroAleatorio();

  document.body.style.backgroundColor = cores[numeroAleatorio];
  cor.textContent = cores[numeroAleatorio];
});

function selecionarNumeroAleatorio() {
  return Math.floor(Math.random() * cores.length);
};