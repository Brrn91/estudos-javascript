const perguntas = document.querySelectorAll('.pergunta');

perguntas.forEach(function (pergunta) {
  const botao = pergunta.querySelector('.pergunta-botao');

  botao.addEventListener('click', function () {
    console.log(botao);

    pergunta.classList.toggle('mostrar-texto');
  });
});
