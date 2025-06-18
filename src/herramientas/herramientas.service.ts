import { Injectable } from '@nestjs/common';
import { CreateHerramientaDto } from './dto/create-herramienta.dto';
import { UpdateHerramientaDto } from './dto/update-herramienta.dto';
import { Herramienta } from './schemas/herramientas.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { HerramientaSchema } from './schemas/herramientas.schema';

@Injectable()
export class HerramientasService {
  constructor(@InjectModel(Herramienta.name) private herramientaModel: Model<Herramienta>) {}

  async create(createHerramientaDto: CreateHerramientaDto): Promise<Herramienta> {
    const createdHerramienta = new this.herramientaModel(createHerramientaDto);
    return createdHerramienta.save();
  }

  async findAll(): Promise<Herramienta[]> {
    return this.herramientaModel.find().populate('archivos').populate('examenes').exec();
  }

  async findOne(id: string): Promise<Herramienta | null> {
    return this.herramientaModel.findById(id).populate('archivos').populate('examenes').exec();
  }

  async findUserArchivos(userId: string): Promise<Herramienta | null> {
    return this.herramientaModel.findById(userId).populate('archivos').exec();
  }

  async findUserExamenes(userId: string): Promise<Herramienta | null> {
    return this.herramientaModel.findById(userId).populate('examenes').exec();
  }

  async update(id: string, updateHerramientaDto: UpdateHerramientaDto): Promise<Herramienta | null> {
    return this.herramientaModel.findByIdAndUpdate(id, updateHerramientaDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Herramienta | null> {
    return this.herramientaModel.findByIdAndDelete(id).exec()
  }
}