let valorTotal = 0;
function adicionar(){
    //Pegando valores 
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorProduto = produto.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;
    //Adicionando produtos selecionados a lista
    let listaProdutos = document.getElementById("lista-produtos");
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
        </section>`;
    //Somando os valores ao total da compra
    let preco = valorProduto * quantidade;
    valorTotal = valorTotal + preco

    let totalCompra = document.getElementById("valor-total");
    totalCompra.textContent = `R$${valorTotal}`;
    //Limpando o valor de quantidade para não gerar confusão
    document.getElementById("quantidade").value = " ";

}

function limpar(){
    //Limpando lista de produtos
    document.getElementById("lista-produtos").innerHTML = "";
    //Zerando valor total da compra
    document.getElementById("valor-total").textContent = "R$0,00";
}