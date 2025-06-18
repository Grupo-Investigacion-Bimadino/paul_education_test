import { Injectable } from '@nestjs/common';
import { CreateExameneDto } from './dto/create-examene.dto';
import { UpdateExameneDto } from './dto/update-examene.dto';
import { Examene } from './schemas/examenes.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ExameneSchema } from './schemas/examenes.schema';

@Injectable()
export class ExamenesService {
  constructor(@InjectModel(Examene.name) private exameneModel: Model<Examene>) {}

  async create(createExameneDto: CreateExameneDto): Promise<Examene> {
    const createdExamene = new this.exameneModel(createExameneDto);
    return createdExamene.save();
  }

  async findAll(): Promise<Examene[]> {
    return this.exameneModel.find().populate('usuarios').populate('herramientas').exec();
  }

  async findOne(id: string): Promise<Examene | null> {
    return this.exameneModel.findById(id).populate('usuarios').populate('herramientas').exec();
  }

  async findUserUsuarios(userId: string): Promise<Examene | null> {
    return this.exameneModel.findById(userId).populate('usuarios').exec();
  }

  async findUserHerramientas(userId: string): Promise<Examene | null> {
    return this.exameneModel.findById(userId).populate('herramientas').exec();
  }

  async update(id: string, updateExameneDto: UpdateExameneDto): Promise<Examene | null> {
    return this.exameneModel.findByIdAndUpdate(id, updateExameneDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Examene | null> {
    return this.exameneModel.findByIdAndDelete(id).exec()
  }
}
