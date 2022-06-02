const resposta = document.querySelector("input")

function gerarSenha(){
  const gerador = (Math.random() + 1).toString(36).substring(2) 
  resposta.value = gerador
}

function copiarPass(){
  const copiarSenha = document.querySelector("input")
  const senhaCopiada = document.getElementById("senhaCopiada")

  senhaCopiada.textContent = "Senha copiada"

  setTimeout(function(){
    senhaCopiada.textContent = ""
  }, 1500)

  navigator.clipboard.writeText(copiarSenha.value)
  
}

function limparTela(){

  const limpaInput = document.querySelector("input")

  limpaInput.value = ""

}







