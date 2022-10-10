import { Specialita } from '../entities/specialita.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SpecialitaService {
  constructor(
    @InjectRepository(Specialita)
    private usersRepository: Repository<Specialita>,
  ) {}

  findAll(): Promise<Specialita[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Specialita> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
