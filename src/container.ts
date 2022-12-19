import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from '../src/core/Types';
import ITokenService from '../src/core/interface/TokenService/TokenService';
import { VerifoneTokenService } from '../src/infra/TokenService/VerifoneTokenService';
import { MongoClient } from '../src/core/interface/Mongo';
import NativeMongoClient from '../src/infra/NativeMongoClient';
import PresentationLayer from './core/interface/PresentationLayer';
import Server from './presentation/Server';
import Application from './app/application';

const container = new Container();

container.bind<ITokenService>(TYPES.TokenService).to(VerifoneTokenService);

container.bind<MongoClient>(TYPES.MongoClient).to(NativeMongoClient).inSingletonScope();

container.bind<PresentationLayer>(TYPES.PresentationLayer).to(Server).inSingletonScope();

container.bind<Application>(TYPES.Application).to(Application).inSingletonScope();

export default container;