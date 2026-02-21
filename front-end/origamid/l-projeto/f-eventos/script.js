const img = document.querySelector('img');

function callback(event) {
  console.log(event);
}

// img.addEventListener('click', callback);

console.log(img);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
}

animaisLista.addEventListener('click', callbackLista);
console.log(animaisLista);

const linkExterno = document.querySelector('a[href^=http]');

function handleLinkExterno(event) {
  event.preventDefault();
  // console.log(event);
  console.log(this.getAttribute('href'));
  console.log(currentTarget);
}

linkExterno.addEventListener('click', handleLinkExterno);

function handleEvent(event) {
  console.log(event.type, event);
}

const h1 = document.querySelector('h1');
// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);

// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);

function handleKeyboard(event) {
  if(event.key === 'f'){
    document.body.classList.add.toggle('fullsreen')
  }
  console.log(event.key);
}

window.addEventListener('keydown', handleEvent);
