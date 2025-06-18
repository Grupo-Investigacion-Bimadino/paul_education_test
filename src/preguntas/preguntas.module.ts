import { Module } from '@nestjs/common';
import { PreguntasService } from './preguntas.service';
import { PreguntasController } from './preguntas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PreguntaSchema } from './schemas/preguntas.schema';

@Module({
  imports :[
    MongooseModule.forFeature([{ name: 'Pregunta', schema: PreguntaSchema }])
  ],
  controllers: [PreguntasController],
  providers: [PreguntasService],
})
export class PreguntasModule {}
