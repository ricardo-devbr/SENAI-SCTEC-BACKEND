// Calcula o valor do desconto e mostra o resultado na página.
function calcularDesconto()
{
    let desconto = document.getElementById("desconto").value;
    let preco = document.getElementById("preco").value;

    let valorDesconto = (preco * desconto)/100;
    document.getElementById("resultadoDesconto").innerHTML = "Valor do desconto: R$ " + valorDesconto;
}
// -------------------------------------------------------------------------------------------------

// Escolhe uma cor aleatória para cada uma das três caixas.
function trocarCor()
{
    const div1 = document.getElementById("div-1");
    const div2 = document.getElementById("div-2");
    const div3 = document.getElementById("div-3");

    const cores = ["blue", "green", "red", "yellow", "orange", "purple", "pink", "brown", "gray", "black"];

    div1.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
    div2.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
    div3.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
}
// ------------------------------------------------------------------------------
// Restaura as cores originais das três caixas.
function retornacor()
{
    const div1 = document.getElementById("div-1");
    const div2 = document.getElementById("div-2");
    const div3 = document.getElementById("div-3");

    div1.style.backgroundColor = "";
    div2.style.backgroundColor = "";
    div3.style.backgroundColor = "";
}
// ------------------------------------------------------------------------------
// Faz a operação escolhida com os dois números informados.
function calcular() {
    let numero1 = parseFloat(document.getElementById("num1").value);
    let numero2 = parseFloat(document.getElementById("num2").value);
    let operador = document.getElementById("operador").value;

    switch (operador) {
        case "+":
            var resultado = numero1 + numero2;
            break;
        case "-":
            var resultado = numero1 - numero2;
            break;
        case "*":
            var resultado = numero1 * numero2;
            break;
        case "/":
            var resultado = numero1 / numero2;
            break;
        default:
            var resultado = "Operador inválido ou número inválido";
    }
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}
// ------------------------------------------------------------------------------
// Mostra "Olá" no idioma escolhido, usando um serviço de tradução.
function saudar(){
    let idioma = document.getElementById("idioma").value;
    let palavra = "Olá";
    console.log(idioma);

    if (idioma === "pt") {
        document.getElementById("traducao").innerHTML = "Tradução: " + palavra;
        return;
    }
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(palavra)}&langpair=pt|${encodeURIComponent(idioma)}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const traducao = data.responseData.translatedText;
            document.getElementById("traducao").innerHTML = "Tradução: " + traducao;
        })
        .catch(error => {
            console.error("Erro na tradução:", error);
            document.getElementById("traducao").innerHTML = "Erro na tradução.";
        });
}
// ------------------------------------------------------------------------------
// Adiciona um produto à lista de compras ou avisa se o campo estiver vazio.
function listaCompras() {
    let conteudo = document.getElementById("lista");
    const novoItem = document.createElement("li");
    novoItem.textContent = document.getElementById("item").value;
    if (novoItem.textContent === "") {
        document.getElementById("confirmacao").innerHTML = "Por favor, digite um item.";
        return;
    } 
    else {
        conteudo.appendChild(novoItem);
        document.getElementById("confirmacao").innerHTML = novoItem.textContent + " adicionado com sucesso!";
    }
}
// ------------------------------------------------------------------------------
// Prepara os botões para mostrar os carros um de cada vez.
function listarCarros() {
    let carros = ["hb20", "uno", "fusca", "renegade", "i30"];
    const conteudo = document.getElementById("conteudo");
    const continuar = document.getElementById("continuar");
    const botoes = document.getElementById("botoes");
    let i = 0;

    conteudo.innerHTML = "";
    continuar.innerHTML = "";
    botoes.innerHTML = "";

    // Mostra o próximo carro e encerra quando todos já foram exibidos.
    function proximoCarro(){
        conteudo.innerHTML += "<p>" + carros[i] + "</p>";
        i++;

        if(i === carros.length){
            finalizarLista("Todos os carros foram exibidos");
        }
    }

    // Exibe uma mensagem final e remove os botões de controle.
    function finalizarLista(mensagem) {
        continuar.innerHTML = mensagem;
        botoes.innerHTML = "";
    }

    // Cria o botão que mostra o próximo carro.
    const botaoProximo = document.createElement("button"); 
    botaoProximo.textContent = "Proximo carro";
    botaoProximo.onclick = proximoCarro;

    // Cria o botão que encerra a lista de carros.
    const botaoParar = document.createElement("button");
    botaoParar.textContent = "Parar";
    botaoParar.onclick = function () {
        finalizarLista("Lista encerrada!");
    };

    botoes.appendChild(botaoProximo);
    botoes.appendChild(botaoParar);

    proximoCarro();
}

// Lê o nome e o horário e mostra a saudação correspondente.
function saudacaoPersonalizada(){
    let nome = document.getElementById("nomeSaudacao").value;
    let hora = parseInt(document.getElementById("hora").value);
    let resultadoSaudacao = document.getElementById("resultadoSaudacao");

    resultadoSaudacao.innerHTML =  exibirSaudacao(nome,hora);
}

// Escolhe a saudação de acordo com o horário informado.
function exibirSaudacao(nome, hora){

    if(hora === 7){
        return "Bom dia, " + nome;
    }
    else if (hora === 12){
        return "Boa tarde, " + nome;
    }
    else if (hora === 19) {
        return "Boa noite, " + nome;
    }
    else {
        return "Hora não selecionada";
    }
}
// ---------------------------------------------------------------------------
// Liga os botoes às ações de mudar ou restaurar a cor do fundo.
function cores() {
    let azul = document.getElementById("azul");
    let verde = document.getElementById("verde");
    let vermelho = document.getElementById("vermelho");
    let resetarCores = document.getElementById("resetar-cores");

    // Aplica a cor recebida ao fundo da página.
    function changeColor(cor) {
        document.body.style.backgroundColor = cor;
    }

    azul.addEventListener("click", function() {
        changeColor("blue");
    });
    verde.addEventListener("click", function() {
        changeColor("green");
    });
    vermelho.addEventListener("click", function() {
        changeColor("red");
    });
    resetarCores.addEventListener("click", function() {
        changeColor("");
    });
}
cores();

// Muda o fundo ao passar o mouse pelo campo e restaura ao sair dele.
let evento = document.getElementById('eventos');

evento.addEventListener('mouseover', function(){
    document.body.style.backgroundColor = 'red';
});
evento.addEventListener('mouseout', function(){
    document.body.style.backgroundColor = 'white';
});

// -----------------------------------------------------------------

// Lê o número do pedido e mostra o sabor de pizza correspondente.
function clientePedido(){

    var numeroPedido = parseInt(document.getElementById("pedido").value);
    var exibirpedido = document.getElementById("exibirpedido");
    exibirpedido.innerHTML = pizzas(numeroPedido);
}

// Converte o número do pedido no sabor de pizza correspondente.
function pizzas(numeroPedido){
    if(numeroPedido === 1){
        return "Pizza de calabresa"
    }
    else if(numeroPedido === 2){
        return "Pizza de quatro queijos"
    }
    else if (numeroPedido === 3){
        return "Pizza de frango com catupiry"
    }
    else if (numeroPedido === 4){
        return "Pizza de brigadeiro"
    }
    else {
        return "Numero de pedido inválido"
    }
}
// -----------------------------------------------------------------
