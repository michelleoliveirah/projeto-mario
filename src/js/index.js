

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
