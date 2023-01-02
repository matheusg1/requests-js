import { conectaApi } from "../js/conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento){
  evento.preventDefault()

  const dadosDePesquisa = document.querySelector('[data-pesquisa]').value
  const busca = await conectaApi.buscaVideo(dadosDePesquisa)
  const lista = document.querySelector('[data-lista]')
  while(lista.firstChild){
    lista.removeChild(lista.firstChild)
  }
  busca.forEach(e =>  lista.appendChild(constroiCard(e.titulo, e.descricao, e.url, e.imagem)));

  if(busca.length == 0){
    lista.innerHTML = `<h2 class='mensagem__titulo'>Não existem vídeos com esse termo`
  }
}

var btnPesquisa = document.querySelector('[data-btn-pesquisa]')

btnPesquisa.addEventListener('click', evento => buscarVideo(evento))