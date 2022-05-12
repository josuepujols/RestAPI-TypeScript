import { HydratedDocument, Model, ObjectId } from "mongoose";
export class GenericRepository<T> {

    constructor( private entity: Model<T> ) {
        
    }
    //get all documents in collection 
    async GetAllAsync(): Promise<Array<T>> {
        const collection: Array<T> = await this.entity.find({});
        return collection;
    }

    async GetByIdAsync(id: string): Promise<Model<T>> {
        const foundItem: Model<T> = await this.entity.findById({_id : id}) as Model<T>;
        return foundItem; 
    }
 
    async InsertAsync(model: Model<T>, item: T): Promise<any> {
        let objectToSave = this.create(model);
        const object = {...objectToSave, ...item};
        const savedItem = await object.save();
        console.log(object);
        return true; 
    }

    create<T>(type: (new () => T)): T {
        return new type();
    }
}