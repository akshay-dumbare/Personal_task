import * as Hapi from '@hapi/hapi';
import { injectable } from 'inversify';
import PresentationLayer from '../core/interface/PresentationLayer';
import lookupRoutes from '../presentation/Lookup/Routes';
 
const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

@injectable()
export default class Server implements PresentationLayer {
   
    public async mount(): Promise<void> {
        server.route(lookupRoutes);
    }

    public async start(): Promise<void> {
        await this.mount();
        // console.log("------------------");
        return server.start();
    }


    public async stop(): Promise<void> {
        await server.stop({ timeout: 1000 });
    }
    

}

