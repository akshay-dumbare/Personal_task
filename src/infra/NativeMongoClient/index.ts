import { injectable } from "inversify";
import * as mongodb from 'mongodb';
import { MongoClient, MongoCollection } from "../../core/interface/Mongo";
import MongoCollectionName from '../../core/enums/MongoCollectionName';

const url = 'mongodb://localhost:27017';
const dbName = 'myproject';

@injectable()
export default class NativeMongoClient implements MongoClient {
    client!: mongodb.MongoClient;
    db!: mongodb.Db;

    async connect(): Promise<void> {
        this.client = await mongodb.MongoClient.connect(url);
        this.db = this.client.db(dbName);
    }

    public collection<Schema extends mongodb.Document>(collectionName: MongoCollectionName): MongoCollection<Schema> {
        return this.db.collection<Schema>(collectionName);
    }

    // async save(card:ICard): Promise<void> {
    //     const collection = this.db.collection('card');
    //     collection.insertOne(card);
    // }

    async close(): Promise<void> {
        await this.client.close();
    }

}
