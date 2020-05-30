function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

alert(setReplace("The Sims 4 é o melhor da franquia!", "4", "2"));

//alert(soma(5, 10));

/*function validarIdade(idade) {
    var validar;
    if(idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validarIdade(idade)); */

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
}

function redirecionar(){
    window.open("https://thesims.com");
    // mesma janela window.location.href = "https://thesims.com";
}