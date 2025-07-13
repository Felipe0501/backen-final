import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OpinionEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    correo: string;

    @Column()
    destino: string;

    @Column()
    experiencia: string;
}
