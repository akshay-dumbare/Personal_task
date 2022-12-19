import 'mocha';
import { expect } from 'chai';
import 'reflect-metadata';
import ITokenService from "../../src/core/interface/TokenService/TokenService";
import { VerifoneTokenService } from "../../src/infra/TokenService/VerifoneTokenService";
import container from "../../src/container"
import { TYPES } from "../../src/core/Types";

describe('Infra: Token Service',() => {
    beforeEach(() => {
        container.snapshot();
        container.rebind<ITokenService>(TYPES.TokenService).to(VerifoneTokenService);
    })

    afterEach(() => {
        container.restore();
    })

    it('200 Success', () => {
        const c = container.get<ITokenService>(TYPES.TokenService);
        const card = c.get('123456');
        expect(card.cardNumber).to.equal('123456789');
        expect(card.cardholderName).to.equal('Prajakta');
        expect(card.expiryDay).to.equal(9);
        expect(card.expiryMonth).to.equal(2);
        expect(card.expiryYear).to.equal(2024);
        expect(card.cvv).to.equal(123);
        
    })
})
