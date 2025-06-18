import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';

@Schema({
    timestamps: true
})

export class Respuesta extends Document{
    @Prop()
    opciones: string;

    @Prop()
    validacion: string;
}

export const RespuestaSchema = SchemaFactory.createForClass(Respuesta);