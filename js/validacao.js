function validaCarro (carro) {
    
    let erros = []

    if (carro.modelo.length == 0){
        erros.push('Informe o nome do carro por favor')
    }

    if (carro.fabricante.length == 0){
        erros.push('Informe o nome do fabricante por favor')
    }

    return erros;

}

function exibeMensagensDeErro (erros) {
    let ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = "";
    
    erros.forEach(function(erro){
        let ul = document.createElement("li")
        li.textContent = erro;
        ul.appendChild(li)

    })
}