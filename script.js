// Variáveis globais
let total = 0;

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho() {
    const nomeProduto = "Calça Jeans";
    const precoProduto = 119.99;
    total += precoProduto;
    const listaCarrinho = document.getElementById("lista-carrinho");
    const novoItem = document.createElement("li");
    novoItem.textContent = `${nomeProduto} - $${precoProduto.toFixed(2)}`;
    listaCarrinho.appendChild(novoItem);
    atualizarTotal();
}

// Função para atualizar o total do carrinho
function atualizarTotal() {
    const totalElement = document.getElementById("total");
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Função para finalizar a compra
function finalizarCompra() {
    alert("Compra finalizada! Total: $" + total.toFixed(2));
}

// Adicionar evento de clique ao botão "Adicionar ao Carrinho"
document.getElementById("adicionar-carrinho").addEventListener("click", adicionarAoCarrinho);

// Adicionar evento de clique ao botão "Finalizar Compra"
document.getElementById("finalizar-compra").addEventListener("click", finalizarCompra);