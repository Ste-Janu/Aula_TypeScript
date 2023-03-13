import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('ste_passageiros')
export class Passageiro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar2", nullable: false })
  nome: string;

  @Column({ type: "number", nullable: false })
  CodVoo: number;
}   