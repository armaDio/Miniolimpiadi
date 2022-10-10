import { Specialita } from './specialita.entity';
import { sesso } from './sesso.enum';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { categoria } from './categoria.enum';
import { squadra } from './squadra.enum';

@Entity()
export class Atleta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  cognome: string;

  @Column()
  sesso: sesso;

  @Column()
  data_nascita: Date;

  @Column({ default: null })
  pettorale: number;

  @Column({ default: null })
  categoria: categoria;

  @Column({ default: null })
  squadra: squadra;

  @ManyToMany(() => Specialita, (specialita) => specialita.atleti, {
    cascade: true,
    eager: true,
  })
  @JoinTable({
    name: 'atletaspecialita',
    joinColumn: { name: 'idatleta', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'idspecialita', referencedColumnName: 'id' },
  })
  specialita: Specialita[];

  addSpecialita(specialita: Specialita) {
    if (this.specialita == null) {
      this.specialita = new Array<Specialita>();
    }
    this.specialita.push(specialita);
  }
}
