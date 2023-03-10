import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('ste_aeroporto')
export class Aeroporto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar2", nullable: false })
  nome: string;

}   

