const form = document.getElementById('form-calcula');
const erro = '#ff0000'; 

function calculaValor(valueA, valueB){
  return valueA * valueB;
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  
  const valueA = Number(document.getElementById('numberA').value);
  const valueB = Number(document.getElementById('numberB').value);
  const mensagemSucesso = `Parabéns`;
  const mensagemSucessoResult = `Seu resultado foi encontrado`;
  const mensagemErro = `Erro`;
  const mensagemErroResult = `O Valor do numero B é menor ou igual do número A`;

  if (valueB <= valueA){
    const containerMenssagem = document.querySelector('.menssage');
    const containerMenssagemResult = document.querySelector('.menssage-result');
    const containerInputB = document.querySelector('#numberB');
    containerMenssagem.innerHTML = mensagemErro;
    containerMenssagemResult.innerHTML = mensagemErroResult;
    containerMenssagem.style.color = erro;
    containerMenssagemResult.style.color = erro;
    containerInputB.style.border = '3px solid' + erro;
  } else {
    let valorTotal = calculaValor(valueA, valueB);
    const containerResult = document.querySelector('.result');
    containerResult.innerHTML = valorTotal;
    if(valorTotal > 99999){
      containerResult.style.fontSize = '30px';
    }       
    const containerInputB = document.querySelector('#numberB');
    const containerMenssagem = document.querySelector('.menssage');
    const containerMenssagemResult = document.querySelector('.menssage-result');
    containerMenssagem.innerHTML = mensagemSucesso;
    containerMenssagemResult.innerHTML = mensagemSucessoResult;
    containerMenssagem.style.color = '';
    containerMenssagemResult.style.color = '';
    containerInputB.style.border = '';
  }
})