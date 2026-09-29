import { Sequelize } from "sequelize";

// Le as configuracoes do banco definidas no arquivo .env.
const dbName = process.env.DB_NAME!;
const dbUser = process.env.DB_USER!;
const dbPass = process.env.DB_PASS!;
const dbHost = process.env.DB_HOST!;

// Cria a conexao com o banco MySQL.
const sequelize = new Sequelize(dbName,dbUser, dbPass,{
    dialect: 'mysql',
    host: dbHost
});

export default sequelize;