function adicionarCarrinho(nome, preco){

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

carrinho.push({
    produto: nome,
    preco: preco
})

localStorage.setItem("carrinho", JSON.stringify(carrinho))

}
