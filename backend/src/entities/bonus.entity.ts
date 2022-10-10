import { squadra } from './squadra.enum';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bonus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  squadra: squadra;

  @Column()
  punti: number;

  @Column({ nullable: true })
  motivo: string;
}
