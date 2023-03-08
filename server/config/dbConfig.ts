import { Dialect, Sequelize } from 'sequelize'
import mysql from 'mysql2/promise';
import File from '../model/fileModel';


const dbName = "files"
const dbUser = "root"
const dbHost = "localhost"
const dbDriver = "mysql"
const dbPassword = ""

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
  createDatabaseIfMissing:true  
}as any)


async function main() {
  try {
    await sequelizeConnection.authenticate();
     console.log('Connection has been established successfully.');
    await sequelizeConnection.sync({ force: false });
    console.log('Database synced successfully!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();

export default sequelizeConnection
