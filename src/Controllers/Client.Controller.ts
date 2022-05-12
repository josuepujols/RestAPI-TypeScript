import { Model } from 'mongoose';
import Client from "../Models/Client";
import { IClient } from "../Interfaces/Client.dto";
import { GenericRepository } from "../Core/GenericRepository";
import { Request, Response } from "express";
import { classicNameResolver } from "typescript";

export class ClientController {
    //Get all clients
    async GetAllClients(req: Request, res: Response) {
        const _repoClient: GenericRepository<IClient> = new GenericRepository<IClient>(Client);
        let clients: Array<IClient | null>  = [null];
        try {
            const clientsToMap = await _repoClient.GetAllAsync();
            //map data
            clientsToMap.map(item => {
                clients.push(item);
            });
            //return data mapped
            res.status(200).json({ data: clients });
        }
        catch (e: any) {
            res.status(400).json({ message: e.toString() });
        }
    }

    //add a new client 
    AddClient(req: Request, res: Response) {
        const _repoClient: GenericRepository<IClient> = new GenericRepository<IClient>(Client);
        const newClient = new Client({
            name: req.body.name,
            lastName: req.body.lastName,
            idIdentification: req.body.idIdentification,
            nationality: req.body.nationality,
            age: req.body.age,
            idtravel: req.body.idtravel
        });
        const data = _repoClient.InsertAsync(Client, newClient);
        res.json(data);
    }
}