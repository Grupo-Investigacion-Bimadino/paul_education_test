import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Herramienta } from '../../herramientas/schemas/herramientas.schema'

@Schema({
    timestamps: true
})

export class Archivo extends Document{
    @Prop()
    nombre: string;

    @Prop()
    tipo: string;
    
    @Prop()
    url: string; 

    @Prop()
    peso: string;
    
    @Prop()
    fechaCarga: string;
    
    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Herramienta' }])
    Herramientas: Herramienta[]
}

export const ArchivoSchema = SchemaFactory.createForClass(Archivo);