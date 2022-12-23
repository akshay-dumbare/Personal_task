import * as Hapi from '@hapi/hapi';
import { injectable } from 'inversify';
import PresentationLayer from '../core/interface/PresentationLayer';
import lookupRoutes from '../presentation/Lookup/Routes';
 
@injectable()
export default class Server implements PresentationLayer {
    private readonly _server: Hapi.Server;

    constructor() {
        this._server = new Hapi.Server({
            port: 3000,
            host: '0.0.0.0',
        });
    }

    public async mount(): Promise<void> {
        this._server.route(lookupRoutes);
    }

    public async start(): Promise<void> {
        await this.mount();
        return this._server.start().then(() =>{
            console.log(`Server running on ${this._server.info.uri}`)
        });
    }

    public async stop(): Promise<void> {
        await this._server.stop({ timeout: 1000 });
    }

}