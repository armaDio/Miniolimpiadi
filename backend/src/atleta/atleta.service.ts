import { sesso } from './../entities/sesso.enum';
import { Atleta } from '../entities/atleta.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AtletaService {
  constructor(
    @InjectRepository(Atleta)
    private usersRepository: Repository<Atleta>,
  ) {}

  async findAll(): Promise<Atleta[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Atleta> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  getAtletiBySesso(sesso: sesso) {
    let atleti = [];
    this.findAll().then((value: Atleta[]) => {
      atleti = value;
    });
    return atleti.filter((atleta: Atleta) => {
      return atleta.sesso === sesso;
    });
  }
}
