class Produto{
    constructor (nome, preco){
        this.nome = nome;
        this.preco = preco;
    }
    exibirDetalhes(){
        console.log(`${this.nome}, ${this.preco}`);
    }
}

const produto_1 = new Produto("Banana", "5,99");
produto_1.exibirDetalhes();

class Eletronico extends Produto{
    constructor(nome, preco, garantia){
        super(nome, preco);
        this.garantia = garantia;
    }
    exibirDetalhes(){
        console.log(`${this.nome}, ${this.preco}, ${this.garantia} ano de garantia`)
    }
}

const eletronico_1 = new Eletronico("notebook vaio", "3.999", "1")
eletronico_1.exibirDetalhes();