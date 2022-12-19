import { injectable } from "inversify";
import { ICard } from "../../core/interface/TokenService/ICard";
import ITokenService from "../../core/interface/TokenService/TokenService";

@injectable()
export class VerifoneTokenService implements ITokenService {
    get(token: string): ICard {
       return{
        cardholderName: 'Prajakta',
        expiryMonth: 2,
        expiryDay: 9,
        expiryYear: 2024,
        cardNumber: '123456789',
        cvv: 123
        }
    }
    create(card: ICard): string {
        return "abcd123";
    }

}