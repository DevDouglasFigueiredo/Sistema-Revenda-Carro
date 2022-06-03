let tabela = document.querySelector('#tabela-carros');
const btnDeletar = document.querySelector('.status-deletar');


tabela.addEventListener('dblclick', deletarCarro);

function deletarCarro(evento){
    evento.target.parentNode.classList.add('fadeOut');
    
    setTimeout(function() {
        evento.target.parentNode.remove();
    }, 600);
    
}