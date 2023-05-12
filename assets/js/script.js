function validaForm(event){
  event.preventDefault()
    const valueA = document.getElementById('numberA').value
    const valueB = document.getElementById('numberB').value
    console.log(valueA, valueB)

      function calculaValor(valueA, valueB){
        return valueA * valueB
      }
      if (valueB <= valueA){
        alert("O número B deve ser maior que o número A!");
      } else {
        let valorTotal = calculaValor(valueA, valueB);
        alert('O valor do calculo é: ' + valorTotal);
      }
}


  //return valueA * valueB
//}
//console.log(valorTotal);

//document.getElementById('btn-calc').submit;

//function validarFormulario(event) {
    //event.preventDefault(); // previne o envio do formulário
    
    //var campoA = document.getElementById("campoA").value;
    //var campoB = document.getElementById("campoB").value;
    
    //if (campoB <= campoA) {
      //alert("O número B deve ser maior que o número A!");
      //return false;
    //}
    
    //document.getElementById("meuFormulario").submit(); // envia o formulário
  //}