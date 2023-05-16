function BTNentrar() {
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;
    nome = nome.toLowerCase();
    
    if(nome == "rafael" && senha == "0608" ){
        window.location.href = "tela.html";
    }
    else if(nome == "eduardo" && senha == "2222"){
        window.location.href = "tela.html";
    }
    else if(nome == "maria julia" && senha == "7777"){
        window.location.href = "tela.html";
    }
    else if(nome == "gabriela" && senha == "2210"){
        window.location.href = "tela.html";
    }
    else{
        document.getElementById.innerHTML = alert("Login ou senha incoreta");
    }
}