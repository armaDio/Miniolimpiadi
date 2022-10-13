import { Atleta } from './atleta.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class Specialita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToMany(() => Atleta, (atleta) => atleta.specialita)
  atleti: Atleta[];

  addAtleta(atleta: Atleta) {
    if (this.atleti == null) {
      this.atleti = new Array<Atleta>();
    }
    this.atleti.push(atleta);
  }
}
