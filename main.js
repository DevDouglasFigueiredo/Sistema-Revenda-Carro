let botaoAdicionarCarro = document.querySelector('#adicionar-carro');

botaoAdicionarCarro.addEventListener('click', (evento) =>{
    evento.preventDefault();

    let form = document.querySelector('#form-adiciona')
    let carro = colocarCarroNoFormulario(form)

    adicionarCarroNaTabela(carro);
    CalculoDovalorDeVenda()
    
})

function adicionarCarroNaTabela(carro){
    let carroTr = montaTr(carro)
    let tabela = document.querySelector('#tabela-carros')
    tabela.appendChild(carroTr)
}

function colocarCarroNoFormulario (form){
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
    return carro;
}

function montaTd (dado, classe){
    let td = document.createElement('td')
    td.classList.add('classe')
    td.textContent = dado;

    return td;
}

function montaTr (carro){
    let carroTr = document.createElement('tr')
    carroTr.classList.add('carro')

    carroTr.appendChild(montaTd(carro.modelo, "info-modelo"));
    carroTr.appendChild(montaTd(carro.fabricante, "info-fabricante"));
    carroTr.appendChild(montaTd(carro.ano, "info-ano"));
    carroTr.appendChild(montaTd(carro.motor, "info-motor"));
    carroTr.appendChild(montaTd(carro.combustivel, "info-combustivel"));
    carroTr.appendChild(montaTd(carro.cambio, "info-cambio"));
    carroTr.appendChild(montaTd(carro.km, "info-km"));
    carroTr.appendChild(montaTd(carro.valorComprado, "info-valor-comprado"));

    return carroTr;
}

function CalculoDovalorDeVenda () {
    
    let tdValorComprado = document.querySelector('.info-valor-comprado')
    let valorComprado = tdValorComprado.textContent;
    const margemDeLucro = 40

    valorDeVenda = 0

    valorDeVenda = valorComprado * margemDeLucro
    console.log(valorDeVenda)
}