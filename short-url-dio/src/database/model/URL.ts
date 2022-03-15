import { prop, getModelForClass } from '@typegoose/typegoose';

export class URL {
    @prop({ required: true })
    public originURL: string;

    @prop({ required: true })
    public hash: string;

    @prop({ required: true })
    public shorURL: string;
}

export const URLModel = getModelForClass(URL)