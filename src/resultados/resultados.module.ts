import { Module } from '@nestjs/common';
import { ResultadosService } from './resultados.service';
import { ResultadosController } from './resultados.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ResultadoSchema } from './schemas/resultados.schema';

@Module({
  imports :[
    MongooseModule.forFeature([{ name: 'Resultado', schema: ResultadoSchema }])
  ],
  controllers: [ResultadosController],
  providers: [ResultadosService],
})
export class ResultadosModule {}
