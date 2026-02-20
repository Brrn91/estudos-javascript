const img = document.querySelector('img');

function callback(event) {
  console.log(event);
}

// img.addEventListener('click', callback);

console.log(img);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
  console.log(event.currentTarget)
  console.log(event.target);
};

animaisLista.addEventListener('click', callbackLista);
console.log(animaisLista);