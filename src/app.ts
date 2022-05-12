//imports 
import express, { Application } from "express";
import clientRoutes from "./Routes/Client.route";
import morgan from "morgan";

//app
const app: Application = express();

//settings 
app.set('port', 4512);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//defining routes
app.use("/api/clients", clientRoutes);

//export the module 
export default app;