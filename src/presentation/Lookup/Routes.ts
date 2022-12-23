import { Request, ResponseToolkit, ServerRoute } from '@hapi/hapi';
import * as joi from 'joi';
import mongoose from 'mongoose';
import { VerifoneTokenService } from '../../infra/TokenService/VerifoneTokenService';
import cardSchema from '../../models/card';

const tokenService = new VerifoneTokenService();

const schema = joi.object({
    threeds_contract_id: joi.string().required(),
    card: joi.string().required(),
    amount: joi.number().required()
});

type Payload = {
    threeds_contract_id: string,
    card: string,
    amount: number
}

const route: ServerRoute = {
    path: '/lookup',
    method: 'POST',
    options: {
        validate: {
            payload: schema,
        },
    },
    handler: async (request: Request, h: ResponseToolkit) => {
        const payload: Payload = request.payload as Payload;
        const card = tokenService.get(payload.card);
        const card1 = mongoose.model('card1',cardSchema);    
        const card2 = new card1(card);
        console.log(card2);
        try {
            const c1 = await card2.save();
            console.log(c1);
        } catch (err) {
            console.log(err);
        }
        return card2;

    }
}

export default route;
