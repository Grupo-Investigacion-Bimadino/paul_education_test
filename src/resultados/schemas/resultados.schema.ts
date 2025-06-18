import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';

@Schema({
    timestamps: true
})

export class Resultado extends Document{
    @Prop()
    graficar: string;

    @Prop()
    puntuacion: string;

    @Prop()
    fecha: string;

    @Prop()
    filtrar: string;
}

export const ResultadoSchema = SchemaFactory.createForClass(Resultado);