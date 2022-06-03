function CalculoDoValorDeVenda (valorComprado, porcentagemDeLucro) {
 
    return valorComprado * (1+porcentagemDeLucro/100)
      
  } 
  
  function converterR$ (valorAconverter){
        return `R$ ${valorAconverter.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`
  
  }
  