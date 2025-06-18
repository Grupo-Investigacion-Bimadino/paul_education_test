import { Module } from '@nestjs/common';
import { ExamenesService } from './examenes.service';
import { ExamenesController } from './examenes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ExameneSchema } from './schemas/examenes.schema';

@Module({
  imports :[
    MongooseModule.forFeature([{ name: 'Examene', schema: ExameneSchema }])
  ],
  controllers: [ExamenesController],
  providers: [ExamenesService],
})
export class ExamenesModule {}
