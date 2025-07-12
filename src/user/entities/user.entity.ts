import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 250 })
    nombreCompleto: string;

    @Column({unique: true})
    correo: string;

    @Column()
    contrasena: string;

    @Column()
    pais: string;
}