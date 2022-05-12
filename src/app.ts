//imports 
import express, { Application } from "express";
import morgan from "morgan";

//app
const app: Application = express();

//settings 
app.set('port', 4512);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//defining routes
//app.use("/api/auth", authRoutes);

//export the module 
export default app;