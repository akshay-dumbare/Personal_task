import { injectable } from "inversify";
import mongoose from "mongoose";
import { MongoClient } from "../../core/interface/Mongo";

@injectable()
export default class NativeMongoClient implements MongoClient {
     
    connect(): Promise<void> {
        mongoose.set('strictQuery',false);
        return mongoose.connect('mongodb://mongo:27017/', { retryWrites: true, w: 'majority' })
            .then(() => {
                console.log('connected to MongoDb');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    public async close(): Promise<void> {
        console.log('Closing connection to Mongodb');

        await mongoose.disconnect();
    }
    
}
