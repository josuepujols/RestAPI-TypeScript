import { Client } from './Models/Client';
import "reflect-metadata"
import { DataSource } from "typeorm";
import { Travel } from './Models/Travel';


export class Connection {
    async Connect() {
        const AppDataSource = new DataSource({
            type: "mysql",
            host: "localhost",
            port: 3306,
            database: "travel",
            username: "root",
            password: "",
            entities: [Client, Travel],
            //synchronize: true,
            logging: false,
        });
        try {
            const makeConnection = await AppDataSource.initialize();
            console.log("Database is connected");
            return makeConnection;
        } catch (error) {
            return console.log(error);
        }
    }
}
