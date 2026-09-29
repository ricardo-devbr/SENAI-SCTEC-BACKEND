let celulas = document.getElementsByClassName('celula');
let reiniciar = document.getElementById("botaoReiniciar");
let vezDox = true;

function clique(celula){
    if(celula.textContent !== ''){
        return;
    }
    celula.textContent = vezDox ? "X" : "O";
    vezDox = !vezDox;
}
function iniciarJogo(){
    resetarCelulas();
    for (const celula of celulas){
        celula.addEventListener('click', function(){
            clique(celula);
        });
    }
}

function resetarCelulas(){
    for(const celula of celulas){
        celula.textContent = "";
    }
    vezDox = true;
}

reiniciar.addEventListener("click", iniciarJogo);

iniciarJogo();