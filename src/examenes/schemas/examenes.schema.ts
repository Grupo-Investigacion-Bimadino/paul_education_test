import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Usuario } from '../../usuarios/schemas/usuarios.schema'
import { Herramienta } from '../../herramientas/schemas/herramientas.schema'

@Schema({
    timestamps: true
})

export class Examene extends Document{
    @Prop()
    fecha: string;

    @Prop()
    tipo: string;
    
    @Prop()
    calificacion: string; 
    
    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }])
    usuarios: Usuario[]

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Herramienta' }])
    herramientas: Herramienta[]
}

export const ExameneSchema = SchemaFactory.createForClass(Examene);