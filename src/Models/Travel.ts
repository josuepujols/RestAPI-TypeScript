import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Travel {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        length: 15
    })
    travelCode!: string;

    @Column({
        length: 30
    })
    fromPlace!: string;

    @Column({
        length: 30
    })
    toPlace!: string;

}