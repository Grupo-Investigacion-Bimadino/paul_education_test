import { Module } from '@nestjs/common';
import { HerramientasService } from './herramientas.service';
import { HerramientasController } from './herramientas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HerramientaSchema } from './schemas/herramientas.schema';

@Module({
  imports :[
    MongooseModule.forFeature([{ name: 'Herramienta', schema: HerramientaSchema }])
  ],
  controllers: [HerramientasController],
  providers: [HerramientasService],
})
export class HerramientasModule {}
