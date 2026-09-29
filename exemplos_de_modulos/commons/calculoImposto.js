// Define a taxa de imposto usada nos calculos (10%).
var taxa = 0.10;
exports.taxa = taxa;

// Calcula somente o valor do imposto.
exports.valor = function(a){
    return a * taxa;
}

// Retorna o valor original somado ao imposto.
exports.adicionar = function(a){
    return a + (a*taxa);
}