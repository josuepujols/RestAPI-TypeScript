import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Travel } from "./Travel";

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        length: 15
    })
    name!: string;

    @Column({
        length: 20
    })
    lastName!: string;

    @Column()
    age!: number;

    @Column({
        length: 20
    })
    idIdentification!: string;

    //@OneToOne(type => Travel) @JoinColumn()
    @ManyToOne(
        type => Travel,
        category => category.id,
        {
          cascade: ['insert', 'update'],
        }
    )
    travel!: Travel

}