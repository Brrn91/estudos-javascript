function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById('txtano');
  var res = document.querySelector('div#res');
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    alert('[ERRO] Verifique os dados e tente novamente!');
  } else {
    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(fano.value);
    var genero = ' ';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    if (fsex[0].checked) {
      genero = 'Homem';
      if (idade >= 0 && idade < 10) {
        //Criança
      } else if (idade >= 10 && idade < 18) {
        //Jovem
      } else if (idade >= 18 && idade < 50) {
        //Adulto
      } else {
        idade >= 50 && idade < 100;
        //Idoso
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher';
      if (idade >= 0 && idade < 10) {
        //Criança
      } else if (idade >= 10 && idade < 18) {
        //Jovem
      } else if (idade >= 18 && idade < 50) {
        //Adulto
      } else {
        idade >= 50 && idade < 100;
        //Idoso
      }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
  }
}
