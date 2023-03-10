import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('ste_editoras')
export class Editora {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ type: "varchar2", nullable: false })
  nome: string;

  @Column({type: "number"})
  cnpj: number;
}   