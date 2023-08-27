import { Sequelize } from "sequelize";
import dotenv from "dotenv/config";


let { DB_HOST, DB_NAME, DB_USER, DB_PASS } = process.env

const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});


export default db;