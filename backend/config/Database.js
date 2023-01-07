import { Sequelize } from "sequelize";

const db = new Sequelize('pembagian','root','',{
    host:"localhost",
    dialect:"mysql"
})

export default db;