import { Specialita } from './../entities/specialita.entity';
import { SpecialitaService } from './specialita.service';
import { SpecialitaController } from './specialita.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Specialita])],
  controllers: [SpecialitaController],
  providers: [SpecialitaService],
  exports: [TypeOrmModule],
})
export class SpecialitaModule {}
