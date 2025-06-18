import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Archivo } from '../../archivos/schemas/archivos.schema'
import { Examene } from '../../examenes/schemas/examenes.schema'

@Schema({
    timestamps: true
})

export class Herramienta extends Document{
    @Prop()
    nombre: string;

    @Prop()
    descripcion: string;
    
    @Prop()
    formato: string; 
    
    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Archivo' }])
    Archivos: Archivo[]

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Examene' }])
    examenes:Examene[]
}

export const HerramientaSchema = SchemaFactory.createForClass(Herramienta);