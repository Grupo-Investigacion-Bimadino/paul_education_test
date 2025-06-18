import { Injectable } from '@nestjs/common';
import { CreatePreguntaDto } from './dto/create-pregunta.dto';
import { UpdatePreguntaDto } from './dto/update-pregunta.dto';
import { Pregunta } from './schemas/preguntas.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PreguntaSchema } from './schemas/preguntas.schema';

@Injectable()
export class PreguntasService {
  constructor(@InjectModel(Pregunta.name) private preguntaModel: Model<Pregunta>) {}

  async create(createPreguntaDto: CreatePreguntaDto): Promise<Pregunta> {
    const createdPregunta = new this.preguntaModel(createPreguntaDto);
    return createdPregunta.save();
  }

  async findAll(): Promise<Pregunta[]> {
    return this.preguntaModel.find().exec();
  }

  async findOne(id: string): Promise<Pregunta | null> {
    return this.preguntaModel.findById(id).exec();
  }

  async update(id: string, updatePreguntaDto: UpdatePreguntaDto): Promise<Pregunta | null> {
    return this.preguntaModel.findByIdAndUpdate(id, updatePreguntaDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Pregunta | null> {
    return this.preguntaModel.findByIdAndDelete(id).exec()
  }
}