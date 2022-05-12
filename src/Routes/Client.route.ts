import { Router } from "express";
import { ClientController } from "../Controllers/Client.Controller";

const router = Router();
const clientController = new ClientController();

router.get("/all", clientController.GetAllClients);
router.post("/add", clientController.AddClient);

export default router; 