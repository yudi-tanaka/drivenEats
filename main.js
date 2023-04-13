let descricaoPrato = null;
let precoPrato = null;
let descricaoBebida = null;
let precoBebida = null;
let descricaoSobremesa = null;
let precoSobremesa = null;
let contador = 0;

function selecionarPrato(li, descricao, preco) {
  // let selecionado = document.querySelector(".prato .borda");
  // if (selecionado !== null) {
  //   selecionado.classList.remove("borda");
  // }
  desmarcarProduto("prato");

  descricaoPrato = descricao;
  precoPrato = preco;

  li.classList.add("borda");
  contador++;
  liberarFachamento();
}

// função 2

function selecionarBebida(li, descricao, preco) {
  desmarcarProduto("bebida");

  descricaoBebida = descricao;
  precoBebida = preco;

  li.classList.add("borda");
  contador++;
  liberarFachamento();
}

// função 3

function selecionarSobremesa(li, descricao, preco) {
  desmarcarProduto("sobremesa");

  descricaoSobremesa = descricao;
  precoSobremesa = preco;

  li.classList.add("borda");
  contador++;
  liberarFachamento();
}

// funcão 4

function desmarcarProduto(produto) {
  const selecionado = document.querySelector(`.${produto} .borda`);
  if (selecionado !== null) {
    selecionado.classList.remove("borda");
    contador--;
  }
}

// função 5
const botao = document.querySelector("button");

function liberarFachamento() {
  if (contador === 3) {
    botao.disabled = false;
    botao.innerHTML = "Fechar pedido";
    botao.classList.add("liberado");
  } else {
    botao.disabled = true;
    botao.innerHTML = "Selecione os 3 itens para fechar o pedidoo";
    botao.classList.remove("liberado");
  }
}

function fecharPedido() {
  const linkDaMensagem = montaMensagemWhatsApp();
  window.open(linkDaMensagem, "_blank").focus();
}

function montaMensagemWhatsApp() {
  const numero = 5511943925350;
  const total = (precoPrato + precoBebida + precoSobremesa).toFixed(2);
  let mensagem = `
    Olá, gostaria de fazer o pedido:
    - Prato: ${descricaoPrato} 
    - Bebida: ${descricaoBebida}
    - Sobremesa: ${descricaoSobremesa}
    Total: R$ ${total}  
  `;
  mensagem = encodeURIComponent(mensagem);
  return `https://wa.me/${numero}?text=${mensagem}`;
}
