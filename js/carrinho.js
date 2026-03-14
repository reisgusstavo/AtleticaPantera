function adicionarCarrinho(nome, preco){
alert(nome + " adicionado ao carrinho!")
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

carrinho.push({
    produto: nome,
    preco: preco
})

localStorage.setItem("carrinho", JSON.stringify(carrinho))

}
