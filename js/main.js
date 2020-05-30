var nome = 'Leonardo Z'
var idade = 17
var idade2 = 17
var frase = "The Sims é top hehe"

//alert("Bem-vindo, " + nome + ". Você tem " + idade + "anos!");

/*

alert("Soma das idades: " + (idade + idade2))
*/

console.log(nome);
console.log(idade + idade2)
console.log(frase.replace("Sims", "Sims 3"))

// var.toUppercase() 
// var.toLowerCase()








// ARRAYS E DICIONÁRIO //

var lista = ['mamão','pêra', 'laranja']
alert(lista[0])

lista.push("uva");
console.log(lista)

lista.pop(lista)
console.log(lista)

console.log(lista.length)
console.log(lista.reverse())

console.log(lista.toString())

console.log(lista.join(" - "))

var fruta = {nome:"laranja", cor:"laranja"}
console.log(fruta.nome);

var frutas = [{nome:"maçã", cor: "vermelha"}, {nome:"uva", cor:"roxa"}];
alert(frutas[1].cor);









// CONDICIONAIS LAÇOS DE REPETIÇÃO E DATA

var yo = prompt("Qual sua idade?");

if (yo >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
}


var count = 0;
while(count <= 2) {
    alert(count);
    count++;
}

var count2;
for(count2=0; count2 <= 2; count2++){
    alert(count2);
}

var d = new Date();
alert(d.getMonth());

// temos outros métodos para Date também