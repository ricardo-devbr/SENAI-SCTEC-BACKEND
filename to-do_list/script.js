let botao = document.getElementById('botaoAdicionar');
let conteudo = document.getElementById("lista");
let mensagem = document.createElement("p");

// chama a funcao adicionarItem() ao clicar no botao
botao.addEventListener("click", function(){
    adicionarItem();
});

// chama a funcao adicionarItem() se clicar no botar Enter do teclado
entrada.addEventListener("keydown", function(evento){
    if (evento.key === "Enter") {
        adicionarItem();
    }
});

// funcao que adicionar um novoa partir do campo de texto
// se o campo de texto estiver vazio retorna uma mensagem e nao adiciona nada
function adicionarItem(){
    let entrada = document.getElementById("entrada");
    if (entrada.value.trim() === ""){
        entrada.value = "";
        mensagem.textContent = "Campo de texto vazio";
        document.body.appendChild(mensagem);
        return;
    }
    
    let novoItem = document.createElement("li");
    novoItem.textContent = entrada.value;
    conteudo.appendChild(novoItem);
    entrada.value = "";

    // remove o elemento paragrafo atribuido a variavel mensagem
    mensagem.remove();
}   