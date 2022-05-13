// import Client from "../Models/Client";
import { IClient } from "../Interfaces/Client.dto";
import { GenericRepository } from "../Core/GenericRepository";
import { Request, Response } from "express";
import { Client } from "../Models/Client";
import { Travel } from "../Models/Travel";
import AppDataSource from "../index";
import { DataSource } from "typeorm";

export class ClientController {
    //private _repoClient!: GenericRepository<Client>;
    constructor(  ) {
        //this._repoClient = new GenericRepository<Client>(Client, dataSource);
    }



    //Get all clients
    async GetAllClients(req: Request, res: Response) {
        const appConnection = await AppDataSource;
        const _repoClient = new GenericRepository<Client>(Client, appConnection);
        let clients: Array<Client> = [];
        try {
            const clientsToMap = await _repoClient.GetAllAsync("travel");
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

    //Get one client
    async GetClient(req: Request, res: Response) {
        const appConnection = await AppDataSource;
        const _repoClient = new GenericRepository<Client>(Client, appConnection);
        try {
            console.log(req.params.id);
            const clients = await _repoClient.GetAllAsync("travel");
            const result = clients.filter(x => x.id == parseInt(req.params.id));
            res.status(200).json({ data: result });
        }
        catch (e: any) {
            res.status(400).json({ message: e.toString() });
        }
    }

    //add a new client 
    async AddClient(req: Request, res: Response) {
        const appConnection = await AppDataSource;
        const _repoClient = new GenericRepository<Client>(Client, appConnection);
        //travel
        const travel = new Travel();
        travel.id = parseInt(req.body.travelId);
        //Client
        const NewClient = new Client();
        NewClient.name = req.body.name;
        NewClient.lastName = req.body.lastName;
        NewClient.age = req.body.age;
        NewClient.idIdentification = req.body.idIdentification;
        NewClient.travel = travel;
        //saving object
        try {
            const result = await _repoClient.InsertAsync(NewClient);
            res.status(201).json({ data: result });
        }
        catch (err) {
            console.log(err);
            res.status(500).json("An error ocurred while saving client");
        }
    }

    //update a client 
    async UpdateClient(req: Request, res: Response) {
        const appConnection = await AppDataSource;
        const _repoClient = new GenericRepository<Client>(Client, appConnection);
        const id = parseInt(req.params.id);
        //travel
        const travel = new Travel();
        travel.id = parseInt(req.body.travelId);
        //Client
        const clients = await _repoClient.GetAllAsync("");
        const clientToupdate = clients.filter(x => x.id == id)[0];
        clientToupdate.id = id;
        clientToupdate.name = req.body.name;
        clientToupdate.lastName = req.body.lastName;
        clientToupdate.age = req.body.age;
        clientToupdate.idIdentification = req.body.idIdentification;
        clientToupdate.travel = travel;
        //updating object
        try {  
            const result = await _repoClient.UpdateAsync(id, clientToupdate);
            const response: number = result.affected as number;
            if (response > 0) res.status(204).json(); 
        }
        catch (err) {
            console.log(err);
            res.status(500).json("An error ocurred while updating client");
        }
    }

    //delete a client 
    async DeleteClient(req: Request, res: Response) {
        const appConnection = await AppDataSource;
        const _repoClient = new GenericRepository<Client>(Client, appConnection);
        const id = parseInt(req.params.id);

        const client = (await _repoClient.GetAllAsync("")).filter(x => x.id == id)[0];
        //deleting object
        try {
            const result = await _repoClient.DeleteAsync(client);
            if (result) res.status(204).json(); 
        }
        catch (err) {
            console.log(err);
            res.status(500).json("An error ocurred while updating client");
        }
    }
}