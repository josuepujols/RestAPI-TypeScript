import { DataSource, FindOptionsWhere, ObjectType, Repository, UpdateResult } from "typeorm";
//import AppDataSource from "../index";
export class GenericRepository<T> {
    private type: ObjectType<T>;
    private repository: Repository<T>;
    private _dataSource!: DataSource;
    constructor(type: ObjectType<T>, AppDataSource: DataSource) {
        this.type = type;
        this._dataSource = AppDataSource;
        this.repository = this._dataSource.getRepository<T>(this.type);
    }
    //get all documents in collection 
    async GetAllAsync(relation: string): Promise<Array<T>> {
        let collection: Array<T> = [];
        if (relation === "") collection = await this.repository.find();
        else {
            collection = await this.repository.find({
                relations: [relation as string]
            });
        }
        return collection;
    }

    async InsertAsync(model: T): Promise<T> {
        const result = await this.repository.save<T>(model);
        return result;
    }

    async UpdateAsync(id: number, model: T): Promise<UpdateResult> {
        const result = await this.repository.update(id, model);
        return result;
    }

    async DeleteAsync(model: T): Promise<T> {
        const result = await this.repository.remove(model);
        return result;
    }
}