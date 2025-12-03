let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function adicionar() { 
  if(isNumero(num.value) && !inLista(num.value, valores)) {

  } else {
    alert('Valor inválido ou já encontrado na lista.')
  }
}

function isNumero(n) {

}

function inLista(n) {

}