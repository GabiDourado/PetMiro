let produtos = document.getElementsByClassName("produto");
for(let i = 0; i < produtos.length; i++){
    let quantidade = parseInt(produtos[i].value);
    let valorUnitario = parseFloat(produtos[i].dataset.preco);
    let total = quantidade * valorUnitario;
    let totalCliente =  "R$"+ total.toFixed(2);
    produtos[i].parentNode.parentNode.getElementsByClassName("valor")[0].innerHTML = totalCliente.replace(".",",");
    produtos[i].addEventListener("input",calculaTotal);
    TotalCarrinho();
}
function calculaTotal() {
    let quantidade = parseInt(this.value);
    let valorUnitario = parseFloat(this.dataset.preco);
    let total = quantidade * valorUnitario;    
    let totalitens = "R$"+ total.toFixed(2);
    this.parentNode.parentNode.getElementsByClassName("valor")[0].innerHTML = totalitens.replace(".",",");
    TotalCarrinho();    
}
function TotalCarrinho(){
    let totalcarrinho = 0;
    let totalprodutos = 0;
    let produtos = document.getElementsByClassName("produto");    
    for(let i=0; i< produtos.length; i++){
       let totalItem = produtos[i].parentNode.parentNode.getElementsByClassName("valor")[0].innerHTML.replace( "R$", "");
       totalcarrinho = totalcarrinho + parseFloat(totalItem);
       let quantidade = parseInt(produtos[i].value);
       totalprodutos = totalprodutos + parseInt(produtos[i].value);       
    } 
    document.getElementById("quantprod").innerHTML ="Você tem "+ totalprodutos+ " produtos em seu carrinho";
    let subtot =  "R$"+ totalcarrinho.toFixed(2);
    document.getElementById("subtot").innerHTML = subtot.replace(".",",");
    let frete = document.getElementById("frete").innerHTML;
    frete = parseFloat(frete.replace("R$", "").replace(",","."));
    let totalGeral = frete + totalcarrinho;
    let tototal = "R$"+ totalGeral.toFixed(2);
    document.getElementById("total").innerHTML = tototal.replace(".",",") ; 

}
document.getElementById("nome").addEventListener("input",verificaNome);
function verificaNome(){
    this.value = this.value.replace(/\d/,"");//d = número
}
document.getElementById("cartao").addEventListener("input",verificaNnum);
function verificaNnum(){
    this.value = this.value.replace(/\D/g,"").replace(/([0-9]{4})([0-9]{4})([0-9]{4})([0-9]{4})/,"$1 $2 $3 $4");//D = letra
}
document.getElementById("data").addEventListener("input",verificadata);
function verificadata(){
    this.value = this.value.replace(/\D/,"").replace(/([0-9]{2})([0-9]{4})/,"$1/$2");
}
document.getElementById("cvv").addEventListener("input",verificacvv);
function verificacvv(){
    this.value = this.value.replace(/\D/,"");
}