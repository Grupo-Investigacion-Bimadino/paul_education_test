import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';

@Schema({
    timestamps: true
})

export class Pregunta extends Document{
    @Prop()
    tiempo: string;

    @Prop()
    puntuacion: string;
    
    @Prop()
    tipo: string; 

    @Prop()
    descripcion: string;
    
    @Prop()
    numero: string;
}

export const PreguntaSchema = SchemaFactory.createForClass(Pregunta);