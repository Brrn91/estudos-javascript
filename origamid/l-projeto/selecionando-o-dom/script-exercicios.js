// Retorne no console todas as imagens do site
const todasAsImg = document.querySelectorAll('img');
console.log(todasAsImg);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const palavraImagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(palavraImagem);

// Selecione todos os links internos (onde o href começa com #)

const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);

// Selecione o primeiro h2 dentro de .animais-descricao

const animais = document.querySelector('.animais-descricao')
const h2Animais = animais.querySelector('h2');

console.log(animais);
console.log(h2Animais);

// Selecione o último p do site

const paragrafos = document.querySelectorAll('p');


console.log(paragrafos[paragrafos.length - 1]);