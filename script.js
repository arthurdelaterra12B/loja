let total = 0;

function adicionarProduto(nome, preco) {
    total += preco;
    document.getElementById('total').innerText = total.toFixed(2);
}

function removerProduto(nome, preco) {
    total -= preco;
    if (total < 0) {
        total = 0;
    }
    document.getElementById('total').innerText = total.toFixed(2);
}
