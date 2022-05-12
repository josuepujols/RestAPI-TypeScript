import { Document, ObjectId } from "mongoose";

export interface IClient extends Document {
    name: string;
    lastName: string;
    idIdentification: string;
    nationality: string;
    age: number;
    idtravel: string;
};