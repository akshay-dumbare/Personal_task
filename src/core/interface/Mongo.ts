export interface MongoClient {
    connect(): Promise<void>;
    close(): Promise<void>;
}
