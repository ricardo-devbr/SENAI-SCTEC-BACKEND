function buscarDados(){
    // codigo de busca 
    return new Promise((resolve, reject) => {
        console.log("buscando dados no servidor");
        
        setTimeout(()=>{
            // funciona como true ou false, onde retorna true se Math.random() retornar um numero maior que 0.5
            let sucesso = Math.random() > 0.5;
            // Se for true executa o resolve
            if (sucesso){
                resolve("dados recebidos com sucesso")
            }
            // se for false executa o reject
            else{
                reject("falha ao buscar dados no servidor")
            }
        }, 2000);
    });
}

// Executando a funcao assincrona
const funcaoAssyc = async () => {
    try{
    const resultado = await buscarDados();
    console.log(resultado);
    }
    catch(erro){
        console.log(erro);
    }
}
funcaoAssyc();