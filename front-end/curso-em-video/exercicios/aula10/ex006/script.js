var a = document.getElementById('area');
a.addEventListener('click', clicar);
a.addEventListener('mouseenter', entrar);
a.addEventListener('mouseout', sair);

function clicar() {
  a.innerText = 'Clicou!';
  a.style.background = 'orange';
}
function entrar() {
  a.innerText = 'Entrou! (Lá ele!)';
  a.style.background = 'red';
}
function sair() {
  a.innerText = 'Saiu! (Lá ele 1000x)';
  a.style.background = 'green';
}
