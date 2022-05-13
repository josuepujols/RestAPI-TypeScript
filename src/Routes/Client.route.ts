import app from "app";
import { Router } from "express";
import { Expression } from "typescript";
import { ClientController } from "../Controllers/Client.Controller";
import AppDataSource from "../index";


const router = Router();


(async () => {
    const clientController = new ClientController();
    router.get("/all", clientController.GetAllClients);
    router.get("/:id", clientController.GetClient);
    router.post("/add", clientController.AddClient);
    router.put("/update/:id", clientController.UpdateClient);
    router.delete("/delete/:id", clientController.DeleteClient);
  })(); 

export default router; 