// Objetivo 1 
// passo 1- pegar o elemento que representa o botão na tela usando o Js;
// passo 2- identificar quando o usuário clicar no botão;
// passo 3- pegar o elemento da modal no Js;
// passo 4 - abrir modal na tela;

//Objetivo 2 - Quando o usuário clicar no "x" fechar a modal;

// passo 1- pegar o elemento de fechar modal;

// passo 2- identificar quando o usuário clicar no "x";
//passo 3- fechar a modal;

const botaoTrailer = document.querySelector(".botao-trailer");
const botaofecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

botaoTrailer.addEventListener("click", () =>{
   modal.classList.add("aberto");
   video.setAttribute("src", linkDoVideo);
});

botaofecharModal.addEventListener("click", () => {

   modal.classList.remove("aberto");
   video.setAttribute("src","");
});

/* Alternativa 2

function alternarModal(){
   modal.classList.toggle("aberto");
}
botaoTrailer.addEventListener("click", () =>{
   alternarModal();
   video.setAttribute("src", linkDoVideo);
});

botaofecharModal.addEventListener("click", () => {
   alternarModal();
   video.setAttribute("src","");
});*/