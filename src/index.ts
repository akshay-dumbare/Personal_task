import ITokenService from "core/interface/TokenService/TokenService";
import container from "./container";
import { TYPES } from "core/Types";
const tokenService = container.get<ITokenService>(TYPES.TokenService);


console.log(tokenService.get('123456'));

// console.log("HEllo from index.ts");
// console.log("HEllo from 2nd line");
