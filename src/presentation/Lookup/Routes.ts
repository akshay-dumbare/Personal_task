import { ICard } from "../../core/interface/TokenService/ICard";

import joi from '@hapi/joi'

export default {
    method: 'POST',
    path: '/card',
    options: {
        validate: {
            payload: {
                cardholderName: joi.string().required(),
                expiryMonth: joi.number(),
                expiryDay: joi.number(),
                expiryYear: joi.number(),
                cardNumber: joi.string().required(),
                cvv: joi.number()
            }
        }
    },
    handler: async (req:any, h:any) => {
       return "Hello";
    }
};
