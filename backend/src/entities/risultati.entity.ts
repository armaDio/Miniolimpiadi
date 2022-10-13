import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class atletaspecialita {
  @PrimaryColumn()
  idatleta: number;

  @PrimaryColumn()
  idspecialita: string;

  @Column({ nullable: true })
  risultato: number;

  @Column({ nullable: true })
  errori: number;
}
