let tabela = document.querySelector('#tabela-carros')
let btnDeletar = document.querySelectorAll('.status-deletar')
let btnAnalise = document.querySelectorAll('.status-analise')
let btnDisponivel = document.querySelectorAll('.status-disponivel')
let btnVendido = document.querySelectorAll('.status-vendido')


btnAnalise.forEach(btn => insertColor(btn, 'analisando'))
btnDisponivel.forEach(btn => insertColor(btn, 'disponivel'))
btnVendido.forEach(btn => insertColor(btn, 'vendido'))

function insertColor(seletor, classe) {
  seletor.addEventListener('click', evento => {
    removeCor(evento)
    evento.target.parentNode.parentNode.classList.add(classe)
  })
}

btnDeletar.forEach(fnCb)

function fnCb(btnDeletar){
  btnDeletar.addEventListener('click', deleteCarro)
  
}

function deleteCarro(evento) {
  
  evento.target.parentNode.parentNode.classList.add('fadeOut')
  setTimeout(function () {
    evento.target.parentNode.parentNode.remove()
  }, 600)
}


function removeCor(evento) {
  evento.target.parentNode.parentNode.classList.remove('analisando')
  evento.target.parentNode.parentNode.classList.remove('disponivel')
  evento.target.parentNode.parentNode.classList.remove('vendido')
}

