import { DataSource } from 'typeorm';
import app from './app';
import { Connection } from "./database";



async function Main() {
    app.listen(app.get('port'));
    console.log("The server is running on port: ", app.get('port'));
}
async function Connect() : Promise<DataSource> {
    const connection: Connection = new Connection();
    return await connection.Connect() as DataSource; 
}

export default Connect();
Main();
