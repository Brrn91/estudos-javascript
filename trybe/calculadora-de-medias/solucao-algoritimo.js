let notas = [];

function adicionarNota() {}

function atualizarListaNotas() {}

function calcularMedia() {
  let somatorioNotas = 0;
  let media = 0;

  for (let index = 0; index < notas.length; index += 1) {
    somatorioNotas = somatorioNotas + notas[index];
  }
}

media = somatorioNotas / notas.length;

if (media > 6) {
  document.getElementById('resultado').textContent = 'Estudante APROVADO!';
} else {
  document.getElementById('resultado').textContent = 'Estudante REPROVADO!'
}
