import { ICard } from "./ICard";
export default interface ITokenService {
    get(token:string): ICard;
    create(card:ICard): string;
}