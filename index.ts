import ITokenService from "./src/core/interface/TokenService/TokenService";
import container from "./src/container";
import TYPES from "./src/core/Types";
import Application from './src/app/application';

const tokenService = container.get<ITokenService>(TYPES.TokenService);

console.log(tokenService.get('123456'));

const app = container.get<Application>(TYPES.Application);

const start = async (): Promise<void> => {
    await app.start();
};

start()
    .catch((error) => {
        console.log('Error while starting application', error);
    });

