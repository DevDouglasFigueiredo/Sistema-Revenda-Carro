var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    
    var carros = document.querySelectorAll(".carro");

    if (this.value.length > 0){
        for (var i = 0; i < carros.length; i++){
            var carro = carros[i];
            var tdModelo = carro.querySelector(".info-modelo");
            var modelo = tdModelo.textContent;
            var expressao = new RegExp(this.value, "i")

            if (!expressao.test(modelo)){
                carro.classList.add("invisivel");
            } else {
                carro.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < carros.length; i++) {
            var carro = carros[i];
            carro.classList.remove("invisivel");
            
        }
    }
});