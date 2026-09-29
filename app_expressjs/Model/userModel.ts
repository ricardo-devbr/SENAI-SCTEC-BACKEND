import db from "../db"
import sequelize from "sequelize";

// Define os campos usados para identificar cada usuario.
export default db.define("user",{
    id: {
        type: sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    user: {
        type: sequelize.STRING,
        allowNull:false
    },
    password: {
        type: sequelize.STRING,
        allowNull:false
    }
})