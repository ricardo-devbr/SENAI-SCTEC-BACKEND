# SENAI-SCTEC Atividades práticas

Repositório com exercícios e projetos desenvolvidos durante meus estudos de programação.

## Projetos

- `javascript_aulas`: exercícios de lógica e manipulação de elementos com JavaScript.
- `jogoDaVelha`: jogo da velha feito com HTML, CSS e JavaScript.
- `to-do_list`: lista de tarefas feita com HTML, CSS e JavaScript.
- `validacao_de_dados`: formulário com validação de dados.
- `exemplos_de_modulos`: exemplos de módulos em JavaScript.
- `poo`: exemplos de programação orientada a objetos e funções assíncronas.
- `app_expressjs`: aplicação Express com TypeScript, Pug e MySQL.

## Tecnologias

JavaScript, HTML, CSS, Node.js, TypeScript, Express, Pug, Sequelize e MySQL.

## Como executar

Os projetos web podem ser abertos pelo respectivo arquivo `index.html` no navegador.

Para iniciar a aplicação Express:

1. Entre na pasta `app_expressjs` e instale as dependências:

   ```bash
   npm install
   ```

2. Crie um arquivo `.env` nessa pasta e configure as variáveis do banco:

   ```env
   DB_NAME=nome_do_banco
   DB_USER=usuario
   DB_PASS=sua_senha
   DB_HOST=localhost
   PORT=3000
   ```

3. Com o MySQL em execução e o banco criado, inicie o servidor:

   ```bash
   npm start
   ```
