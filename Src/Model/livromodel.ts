import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('ste_autores')
export class Autor {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ type: "varchar2", nullable: false })
  nome: string;

  
}   