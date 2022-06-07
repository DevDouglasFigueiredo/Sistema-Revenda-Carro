  let tabela = document.querySelector('#tabela-carros')
  let btnDeletar = document.querySelectorAll('.status-deletar')
  let btnAnalise = document.querySelectorAll('.status-analise')
  
  btnDeletar.forEach(btn => {
    btn.addEventListener('click', deletarCarro)
  
    function deletarCarro(evento) {
      
      evento.target.parentNode.parentNode.classList.add('fadeOut');

    //   setTimeout(function() {
    //      evento.target.parentNode.parentNode.remove();
    // }, 600);

  }})

  btnAnalise.forEach(btn => {
    btn.addEventListener('click', carroEmAnalise)

    function carroEmAnalise (evento){

      evento.target.parentNode.parentNode.classList.add('analisando')
    }
  })


