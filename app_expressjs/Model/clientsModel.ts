import db from "../db"
import sequelize from "sequelize";

// Define os campos que serao armazenados para cada cliente.
export default db.define("client",{
    id: {
        type: sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: sequelize.STRING,
        allowNull:false
    },
    email: {
        type: sequelize.STRING,
        allowNull:false
    }
})