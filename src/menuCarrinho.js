function abrirCarrinho() {
  document.querySelector('#carrinho').style.right = '0'
  
}  

function fecharCarrinho() {
  document.querySelector('#carrinho').style.right = '-360px'
  
}

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.querySelector(".botao-fechar-carrinho");
  const botaoAbrirCarrinho = document.querySelector(".botao-abrir-carrinho");

  botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
  botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}
