import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('ste_voo')
export class Voo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar2", nullable: false})
    nome: string;

    @Column({type: "number"})
    CP: number; //código passageiro
}