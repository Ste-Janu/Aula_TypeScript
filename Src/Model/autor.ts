import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('ste_autores')
export class Autor {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ type: "varchar2", nullable: false })
  nome: string;

  @Column({type: "varchar2", nullable: false  })
  sobrenome: string;

  @Column({type: "date"})
  datanasc: Date;
}   