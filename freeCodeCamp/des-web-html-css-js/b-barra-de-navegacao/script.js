const botaoNavegacao = document.querySelector('.navegacao');
const links = document.querySelector('.navegacao-links');

botaoNavegacao.addEventListener('click', function (){
  links.classList.toggle('mostrar-links');
});