// Importa os modulos que contem os exemplos.
var pessoa = require("./commons/pessoa");
// Cria um objeto com os dados de uma pessoa.
var ricardo = pessoa();
var soma = require("./commons/soma")
var imposto = require("./commons/calculoImposto")

// Exibe os dados e os resultados dos calculos.
console.log(JSON.stringify(ricardo));
console.log(soma(2,2))
console.log("Valor do produto com imposto: "+imposto.adicionar(10));
console.log("Valor do imposto: "+imposto.valor(10));
// Mostra a taxa de imposto exportada pelo modulo.
console.log("taxa do imposto: "+imposto.taxa);

