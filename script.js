let total = 0;

function adicionarProduto(nome, preco) {
    total += preco;
    document.getElementById('total').innerText = total.toFixed(2);
}

function removerProduto(nome, preco) {
    total -= preco;
    document.getElementById('total').innerText = total.toFixed(2);
}

function comprar() {
    alert("Obrigado pela sua compra!");
}