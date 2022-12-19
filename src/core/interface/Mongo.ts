import { Collection, ClientSession, Document } from 'mongodb';

export interface MongoCollection<Schema extends Document> extends Collection<Schema> {}

export type MongoSession = ClientSession;

export interface MongoClient {
    connect(): Promise<void>;
    collection<Schema extends Document>(collectionName: string): MongoCollection<Schema>;
    close(): Promise<void>;
}
