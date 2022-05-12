import { IClient } from "../Interfaces/Client.dto";
import { Schema, model, Model } from "mongoose";


const clientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        Required: true
    },
    idIdentification: {
        type: String,
        required: true,
        min: 10
    },
    nationality: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    idtravel: {
        string: String,
        required: false
    }
});

const Client: Model<IClient> = model<IClient>('Client', clientSchema);

export default Client;