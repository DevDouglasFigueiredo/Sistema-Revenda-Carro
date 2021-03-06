let botaoAdicionarCarro = document.querySelector('#adicionar-carro')

botaoAdicionarCarro.addEventListener('click', evento => {
  evento.preventDefault()

  let form = document.querySelector('#form-adiciona')
  let carro = colocarCarroNoFormulario(form)
  let carroTr = montaTr(carro)

  CalculoDoValorDeVenda()

  let erros = validaCarro(carro)

  if (erros.length > 0) {
    exibeMensagensDeErro(erros)

    return
  } else {
    adicionarCarroNaTabela(carro)
  }
  if (evento.target && evento.target.nodeName == 'BUTTON') {
    let btnDeletar = document.querySelectorAll('.status-deletar')
    let btnAnalise = document.querySelectorAll('.status-analise')
    let btnDisponivel = document.querySelectorAll('.status-disponivel')
    let btnVendido = document.querySelectorAll('.status-vendido')

    btnAnalise.forEach(btn => insertColor(btn, 'analisando'))
    btnDisponivel.forEach(btn => insertColor(btn, 'disponivel'))
    btnVendido.forEach(btn => insertColor(btn, 'vendido'))

    btnDeletar.forEach(fnCb)
  }

  form.reset()
})

function adicionarCarroNaTabela(carro) {
  let carroTr = montaTr(carro)
  let tabela = document.querySelector('#tabela-carros')
  tabela.appendChild(carroTr)
}

function colocarCarroNoFormulario(form) {
  let carro = {
    modelo: form.modelo.value,
    fabricante: form.fabricante.value,
    ano: form.ano.value,
    motor: form.motor.value,
    combustivel: form.combustivel.value,
    cambio: form.cambio.value,
    km: form.km.value,
    valorComprado: form.valorComprado.value
  }
  return carro
}

function montaTd(dado, classe) {
  let td = document.createElement('td')
  td.classList.add('classe')
  td.textContent = dado

  return td
}

function montaTr(carro) {
  let carroTr = document.createElement('tr')
  carroTr.classList.add('carro')

  carroTr.appendChild(montaTd(carro.modelo, 'info-modelo'))
  carroTr.appendChild(montaTd(carro.fabricante, 'info-fabricante'))
  carroTr.appendChild(montaTd(carro.ano, 'info-ano'))
  carroTr.appendChild(montaTd(carro.motor, 'info-motor'))
  carroTr.appendChild(montaTd(carro.combustivel, 'info-combustivel'))
  carroTr.appendChild(montaTd(carro.cambio, 'info-cambio'))
  carroTr.appendChild(montaTd(carro.km, 'info-km'))
  carroTr.appendChild(
    montaTd(converterR$(carro.valorComprado), 'info-valor-comprado')
  )
  carroTr.appendChild(
    montaTd(
      converterR$(CalculoDoValorDeVenda(carro.valorComprado, 45)),
      'info-valor-de-venda'
    )
  )

  carroTr.innerHTML += `
    <td class="info-status">
        <div class="status-vendido">Vendido</div>
        <div class="status-disponivel">Disponivel</div>
        <div class="status-analise">Em Analise</div>
        <div class="status-deletar">Deletar</div>
	</td>
    `
  return carroTr
}

function insertColor(seletor, classe) {
  seletor.addEventListener('click', evento => {
    removeCor(evento)
    evento.target.parentNode.parentNode.classList.add(classe)
  })
}

function fnCb(btnDeletar) {
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