import { Injectable } from '@nestjs/common';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
import { Resultado } from './schemas/resultados.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ResultadoSchema } from './schemas/resultados.schema';

@Injectable()
export class ResultadosService {
  constructor(@InjectModel(Resultado.name) private resultadoModel: Model<Resultado>) {}

  async create(createResultadoDto: CreateResultadoDto): Promise<Resultado> {
    const createdResultado = new this.resultadoModel(createResultadoDto);
    return createdResultado.save();
  }

  async findAll(): Promise<Resultado[]> {
    return this.resultadoModel.find().exec();
  }

  async findOne(id: string): Promise<Resultado | null> {
    return this.resultadoModel.findById(id).exec();
  }

  async update(id: string, updateResultadoDto: UpdateResultadoDto): Promise<Resultado | null> {
    return this.resultadoModel.findByIdAndUpdate(id, updateResultadoDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Resultado | null> {
    return this.resultadoModel.findByIdAndDelete(id).exec()
  }
}