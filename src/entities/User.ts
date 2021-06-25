import { Entity, PrimaryColumn, Column, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Exclude, Expose } from 'class-transformer';

@Entity("Users")
class User {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Exclude()
    @Column()
    password: string;

    @Expose({name: "passphrase"})
    encodedPassword(): string {
        return '*************';
    };

    @Column()
    admin: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
};

export  { User };
