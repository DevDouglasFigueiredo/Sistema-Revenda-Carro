function validaCarro (carro) {
    
    let erros = []

    if (carro.modelo.length == 0){
        erros.push('* Insira o nome do carro por favor')
    }

    if (carro.fabricante.length == 0){
        erros.push('* Insira o nome do fabricante por favor')
    }

    if (carro.ano.length == 0){
        erros.push('* Insira o ano do carro por favor')
    }

    if (carro.motor.length == 0){
        erros.push('* Insira o a potencia do motor por favor')
    }

    if (carro.combustivel.length == 0){
        erros.push('* declare se o carro é flex, GNV, gasolina ou alcool, por favor')
    }

    if (carro.cambio.length == 0){
        erros.push('* Insira o tipo de cambio, manual ou automatico, por favor')
    }
    if (carro.km.length == 0){
        erros.push('* Insira a kilometragem que o carro se encontra, por favor')
    }
    if (carro.valorComprado.length == 0){
        erros.push('* Insira o valor em reais que o carro foi comprado , por favor')
    }

    return erros;

}

function exibeMensagensDeErro (erros) {
    let ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = "";
    
    
    erros.forEach(function(erro){
        let li = document.createElement("li")
        li.textContent = erro;
        ul.appendChild(li)

    })
}