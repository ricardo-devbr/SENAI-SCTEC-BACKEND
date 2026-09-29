const campoSenha = document.getElementById("senha");
const senhaStatus = document.getElementById("senha-status");
const senhaPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]+$/;

// funcao que verifica se a senha atende aos requisitos
function senhaAtendeRequisitos(senha){
    return senha.length >= 8 && senha.length <= 15 && senhaPattern.test(senha);
}

// se a senha nao atender aos, mostra um aviso em vermelho, se atender, o aviso some
campoSenha.addEventListener("input", function(){
    const mostrarAviso = campoSenha.value !== "" && !senhaAtendeRequisitos(campoSenha.value);
    senhaStatus.textContent = mostrarAviso ? "A senha ainda não atende aos requisitos." : "";
    senhaStatus.hidden = !mostrarAviso;
    campoSenha.setAttribute("aria-invalid", String(mostrarAviso));
});

// funcao que valida o formulario  e exibe alerta se algo nao estiver em conformidade
function validarForm(){

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;
    let telefone = document.getElementById("telefone").value;
    let telefoneFormatado = telefone.replace(/\D/g, "");
    let senha = document.getElementById("senha").value;

    if (nome === "" || email === "" || mensagem === ""
        || telefone === "" || senha === ""
    ){
        alert("Todos os campos devem ser preenchidos");
        return false;
    }
 
    if (nome.length < 3 || nome.length > 50){
        alert("O Campo NOME deve conter entre 3 e 50 caracteres");
        return false;
    }
    if (email.length <= 3 || email.length > 50){
        alert("O Campo EMAIL deve conter entre 5 e 50 caracteres");
        return false;
    }
    if(telefoneFormatado.length < 11 || telefoneFormatado.length > 14){
        alert("O TELEFONE deve ter entre 11  e 14 caracteres");
        return false;
    }
    if(senha.length < 8 || senha.length > 15){
        alert("A senha deve ter no mínimo 8 caracteres e no maximo 15");
        return false;
    }

// atribui uma expressao regular de email para a variavel emailPatern
    const emailPatern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// verifica se o email atende aos requisitos caracteres de email da expressao regular
    if(!emailPatern.test(email)){
        alert("Insira um formato de EMAIL válido.");
        return false;
    }

// verifica se a senha atende aos requisitos caracteres de senha da expressao regular
// minimo de 8 caracteres, minimo de 1 letra maiuscula, minimo de 1 numero, minimo 1 simbolo $*&@#
    if(!senhaPattern.test(senha)){
        alert("A senha informada nao atende aos Requisitos para uma senha forte")
        return false;
    }

    return true;
}
document.getElementById("contact-form").addEventListener("submit", function(evento){
    // segura o envio do formulario//
    evento.preventDefault();
    if (validarForm()){
        alert("Formulário validado.")
    }
})