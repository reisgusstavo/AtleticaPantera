let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

let lista = document.getElementById("listaCarrinho");
let total = 0;

carrinho.forEach(produto => {

    let li = document.createElement("li");

    li.innerHTML = `
        <div class="item-carrinho">
            <img src="${produto.imagem}">
            <span>${produto.nome}</span>
        </div>
        <span>R$ ${produto.preco.toFixed(2)}</span>
    `;

    lista.appendChild(li);
    total += produto.preco;
});

document.getElementById("total").innerText = "Total: R$ " + total.toFixed(2);
