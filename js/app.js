function adicionar(){
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorProduto = produto.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;
}

function limpar(){
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$0,00";
}