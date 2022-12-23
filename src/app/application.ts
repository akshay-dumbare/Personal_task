import { inject, injectable } from 'inversify';
import { MongoClient } from '../core/interface/Mongo';
import PresentationLayer from '../core/interface/PresentationLayer';
import TYPES from '../core/Types';

@injectable()
export default class Application {
    constructor(
        @inject(TYPES.MongoClient) private readonly mongoClient: MongoClient,
        @inject(TYPES.PresentationLayer) private readonly presentationLayer: PresentationLayer,
    ) {}

    public async start(): Promise<void> {
        await Promise.all([
            this.mongoClient.connect(),
        ]);
        await this.presentationLayer.start();
    }

    public async stop(): Promise<void> {
        try {
            await this.presentationLayer.stop();
            await Promise.all([
                this.mongoClient.close(),
            ]);
            console.log('Application closed successfully!');
        } catch (e) {
            console.log('Application server closed with error:', e);
            throw e;
        }
    }
}
    