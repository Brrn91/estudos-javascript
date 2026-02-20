function calcular() {
  var txtv = document.getElementById('txtvel');
  var res = document.getElementById('res');
  var vel = Number(txtv.value);
  res.innerHTML = `<p>Sua velicidade atual é de: <strong>${vel}</strong> KM/h</p>`;
  if (vel > 60) {
    res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade!</p>`;
  }
  res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`;
}
